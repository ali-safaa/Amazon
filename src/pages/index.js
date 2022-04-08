import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';
import Script from '../components/script';
export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>home</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <Header />
      <Banner />
      <ProductFeed products={products} />
      <Script />
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  return {
    props: { products },
  };
};
