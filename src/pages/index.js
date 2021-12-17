import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import axios from "axios";
import ProductFeed from "../components/ProductFeed";
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
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: { products },
  };
}
