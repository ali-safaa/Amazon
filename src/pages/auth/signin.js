import React from 'react'
import Head from "next/head";
import { getProviders, signIn as signIntoProvider } from "next-auth/react"
import Header from '../../components/Header';
function signIn({ providers }) {
    return (
        <div className="text-center">
          <Head>
        <title>Sign in</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>
          <Header />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <img className="w-[150px] sm:w-[200px] m-auto my-20" src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png" alt="logo" />
          <p className="my-3 text-gray-400 font-bold">Sign in to buy somthing you liked</p>
          <button className="bg-blue-500 text-white hover:bg-black px-5 py-2" onClick={() => signIntoProvider(provider.id, {callbackUrl: '/'})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
    )
}
export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: { providers }
    }
}
export default signIn
