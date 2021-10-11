import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import axios from "axios";
import Products from "../components/Products";
export default function Home() {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/`).then((res) =>{
      const response = res.data;
      setProducts(response);
    });
  },[])
  return (
    <div>
      <Head>
        <title>home</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>
      <Header />
      <Banner />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products && products.map((product, index) =>
        <Products key={index} id={product.id} title={product.title} price={product.price} image={product.image} rating={5} description={product.description} category={product.category}/>
      )}
      </div>
    </div>
  );
}
