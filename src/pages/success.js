import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

function Success() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen pt-5">
      <Head>
        <title>success page</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <main className="bg-white shadow-md w-max px-10 m-auto pb-5 rounded-md">
        <div className="flex items-center space-x-3 pt-3">
          <i className="fas fa-check text-green-500 bg-gray-100 h-[30px] w-[30px] rounded-full flex items-center justify-center"></i>
          <h2 className="font-semibold text-xl">
            Thank you, your order has been confirmed
          </h2>
        </div>
        <p className="w-[400px] pt-3 pb-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          necessitatibus possimus deserunt explicabo deleniti sapiente totam
          mollitia rerum, id provident.
        </p>
        <h3
          onClick={() => router.push('/orders')}
          className="m-auto cursor-pointer hover:bg-black duration-300 bg-green-500 px-5 rounded-sm text-white font-semibold py-2 w-max"
        >
          Show the orders
        </h3>
      </main>
    </div>
  );
}

export default Success;
