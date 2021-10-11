import React from 'react'
import Head from "next/head"
import firebase from "./firebase";
import Header from "../components/Header"
import auth from "./firebase"
import router from 'next/router';
function login() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const signIn = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      console.log(auth)
      router.push('/')
    }).catch(error => alert(error.message))
  }
    return (
        <div>
           <Head>
             <title>login</title>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
           </Head>
           <Header />
           <div className="grid mt-5">
           <h1 className="text-2xl font-bold text-center">AMAZON LOGIN</h1>
           <form className="grid m-auto my-5">
             <input className="bg-gray-100 sm:w-[300px] mb-5 pl-2" type="email" value={email} onChange={e => setEmail(e.target.value)}  placeholder="Email"/>
             <input className="bg-gray-100 sm:w-[300px] pl-2" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
           </form>
           <button onClick={signIn} type="submit" className="bg-yellow-400 p-1 rounded-md font-bold w-[200px] text-black m-auto hover:bg-black hover:text-white">SignUp</button>
           </div>
        </div>
    )
}

export default login
