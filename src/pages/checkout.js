import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { selectItems, TotalItems,  } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import Currency from "react-currency-formatter";
import { useSession } from 'next-auth/react';
// import { loadStripe } from '@stripe/stripe-js';

function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(TotalItems);
    const {data:session} = useSession();

    // const stripePromise = loadStripe(process.env.stripe_public_key);
    // const createCheckoutSession = async () => {
    //     const stripe = await stripePromise
    // }
    return (
        <div className="bg-gray-100">
            <Head>
                <title>checkout</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            </Head>
            <Header />
                 <h1 className="text-2xl font-bold ml-2 border-b-2 pb-1">{items.length === 0 ? "Your shopping is empty" : "Your shopping cart"}</h1>
                 <p className="text-gray-400 font-bold pl-3">{items.length === 0 ? "You dont have any products" : "Your products here"}</p>
                {items && items.map((item) => (
                    <div className="flex flex-col">
                    <CheckoutProduct
                    key={item.props.id}
                    category={item.props.category}
                    image={item.props.image}
                    title={item.props.title}
                    rating={item.props.rating}
                    description={item.props.description}
                    price={item.props.price}
                    />
                    </div>
                    )
                )}
                <div>
                    {items.length > 0 && (
                        <>
                    <h1>{`Subtotal (${items.length} items)`}
                    <span className="font-bold">
                    <Currency quantity={total} currency="USD"/>
                    </span>
                    </h1>
                    <button>
                        {!session ? "sign in to checkout" : "proced to checkout"}
                    </button>
                        </>
                    )}
                </div>
        </div>
    )
}

export default Checkout
