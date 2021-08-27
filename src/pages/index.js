import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import axios from "axios";
import Products from "../components/Products";
export default function Home() {
  const [todos, setTodos] = useState();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/`).then((res) =>{
      const response = res.data;
      setTodos(response);
      console.log(response)
    });
  },[])
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>
      <Header />
      <Banner 
      image="https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {todos && todos.map(todo =>
        <Products title={todo.title} price={todo.price} image={todo.image} rating={5} description={todo.description} category={todo.category}/>
      )}
      </div>
    </div>
  );
}
