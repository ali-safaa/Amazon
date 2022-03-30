import { buffer } from 'micro';
import * as admin from 'firebase-admin';
import { json } from 'micro';
// secure a connection in firebase from backend
const serviceAcount = require('../../../permissions.json');
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAcount),
    })
  : admin.app();

// etablish stripe secret
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const fulFillTheOrder = async (session) => {
  // console.log('fulfill order', session)
  return app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SECESS, Order ${session.id} has been added to DB`);
    });
};
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;
export default async (req, res) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers['stripe-signature'];
    let event;
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log('error', err.message);
      return res.status(400).send('webhook', err.message);
    }
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      //fulfill the order
      return fulFillTheOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(200).send('webhook error', err.message));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
