import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';
import ReactCurrencyFormatter from 'react-currency-formatter';
import { useSelector } from 'react-redux';
import CheckoutProducts from '../components/CheckoutProducts';
import Header from '../components/Header';
import { selectItems, selectTotal } from '../slices/basketSlice';

function checkout() {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const total = useSelector(selectTotal);
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
        <h1 className="font-semibold text-sm sm:text-lg text-gray-400 ml-7 pt-5">
          {items.length === 0
            ? 'Your Shopping Basket Is Empty.'
            : 'Your Shopping Cart.'}
        </h1>
        {items.map((item, i) => (
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
        {items.length > 0 && (
          <>
            <p className="mt-5 ml-5 font-semibold text-gray-500">
              {items.length} : items
            </p>
            <div className="flex items-center space-x-3 ml-3">
              <h2 className="font-semibold md:text-xl text-md">
                (Subtotal
                <ReactCurrencyFormatter quantity={total} currency="USD" />)
              </h2>
              <button
                className={`button px-10 py-3 ${
                  !session && 'text-white bg-gray-500'
                }`}
              >
                {!session ? 'Sign in to checkout' : 'proceed to checkout'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default checkout;
