import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { useSession } from 'next-auth/react';
import { getBasketTotal } from "../slices/basketSlice"
// import { loadStripe } from '@stripe/stripe-js';

function Checkout() {
    const items = useSelector(selectItems);
    const {data:session} = useSession();

    // const stripePromise = loadStripe(process.env.stripe_public_key);
    // const createCheckoutSession = async () => {
    //     const stripe = await stripePromise
    // }
    return (
        <div className="bg-gray-100 max-w-screen-2xl mx-auto">
            <Head>
                <title>checkout</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            </Head>
            <Header />
                 <h1 className="text-2xl font-bold ml-2 border-b-2 pb-1">{items.length === 0 ? "Your shopping is empty" : "Your shopping cart"}</h1>
                 <p className="text-gray-400 font-bold pl-3">{items.length === 0 ? "You dont have any products" : "Your products here"}</p>
                {items && items.map((item) => (
                    <div key={item.props.id} className="flex flex-col">
                    <CheckoutProduct
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
                <div className="flex flex-col bg-white p-10">
                    <CurrencyFormat renderText={(value) => 
                        <>
                        <p>
                          subtotal ({`${items.length}`} items)  <strong>{value}</strong>
                        </p>
                        </>
                    }
                    decimalScale={2}
                    value={getBasketTotal(items)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    />
                    <button></button>
                </div>
        </div>
    )
}

export default Checkout
