import React from 'react'
import Head from "next/head"
import firebase from "./firebase";
import Header from "../components/Header"
function login() {
    return (
        <div>
           <Head>
             <title>login</title>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
           </Head>
           <Header />
           <h1 className="text-2xl font-bold">amazon login</h1>
           <button type="submit" className="bg-blue-400 p-1 rounded-md font-bold text-white">signin</button>
        </div>
    )
}

export default login
