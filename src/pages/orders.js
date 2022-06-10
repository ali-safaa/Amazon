import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';
import db from '../../firebase';
import moment from 'moment';
import Order from '../components/Order';

function Orders({ orders }) {
  const { data: session } = useSession();
  console.log(orders);
  return (
    <div>
      <Head>
        <title>home page</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b border-yellow-400">Your orders</h1>
        {session ? (
          <h3 className="mt-2">({orders.length}) orders</h3>
        ) : (
          <h3 className="mt-2">Please signin to show your orders</h3>
        )}
        {orders.map((order) => (
          <div>
            <Order key={order.id} id={order.id} order={order} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default Orders;

export const getServerSideProps = async (context) => {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }
  const stripeOrders = await db
    .collection('users')
    .doc(session.user.email)
    .collection('orders')
    .orderBy('timestamp', 'desc')
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: { orders },
  };
};
