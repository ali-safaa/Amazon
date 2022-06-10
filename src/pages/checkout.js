import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';
import ReactCurrencyFormatter from 'react-currency-formatter';
import { useSelector } from 'react-redux';
import CheckoutProducts from '../components/CheckoutProducts';
import { selectItems, selectTotal } from '../slices/basketSlice';

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const total = useSelector(selectTotal);
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items: items,
      email: session.user.email,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Checkout</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <div className="bg-white pb-3">
        <h1 className="font-semibold text-md sm:text-lg text-gray-500 border-b pl-8 pb-3 mt-3">
          {items?.length === 0
            ? 'Your Shopping Basket Is Empty.'
            : 'Your Shopping Cart.'}
        </h1>
        {items?.map((item, i) => (
          <CheckoutProducts
            key={i}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            hasPrime={item.hasPrime}
          />
        ))}
      </div>
      <div>
        {items?.length > 0 && (
          <>
            <div className="flex items-center space-x-3 ml-8 mt-5">
              <p className="">{items.length} : items</p>
              <h2 className="md:text-xl text-md">
                (SUBTOTAL __
                <ReactCurrencyFormatter quantity={total} currency="USD" />)
              </h2>
            </div>
            <button
              onClick={createCheckoutSession}
              role="link"
              className={`bg-yellow-300 ml-8 mt-3 px-8 py-1 font-semibold rounded-md ${
                !session && 'text-white bg-gray-500'
              }`}
            >
              {!session ? 'Sign in to checkout' : 'proceed to checkout'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;
