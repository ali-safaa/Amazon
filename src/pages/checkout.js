import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';
import ReactCurrencyFormatter from 'react-currency-formatter';
import { useSelector } from 'react-redux';
import CheckoutProducts from '../components/CheckoutProducts';
import Header from '../components/Header';
import { selectItems, selectTotal } from '../slices/basketSlice';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.stripe_publice_key);
function checkout() {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const total = useSelector(selectTotal);

  const checkout_sessions = async () => {
    const stripe = await stripePromise;
    const checkoutSessions = await axios.post('/api/checkout_sessions', {
      items: items,
      email: session.user.id,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSessions.data.id,
    });
    result.error && alert(result.error.message);
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
      <Header />
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
              onClick={checkout_sessions}
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

export default checkout;
