import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import Currency from "react-currency-formatter";
import Image from "next/image";
function Products(props) {
    const {id, title, price, image, description, category} = props;
    const MIN_RATING = 1;
    const MAX_RATING = 5;
    const dispatch = useDispatch();
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    const addToCart = () => {
        const product = {
            props,
        };
        dispatch(addToBasket(product))
    }
    return (
        <div key={id} className="relative flex flex-col m-5  z-30 p-10 bg-white">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <img className="sm:w-[300px] sm:h-[300px] w-[200px] h-[200px] m-auto" src={image} alt="" />
            <h4 className="my-3">{title}</h4>
            <div className="flex">
            {Array(rating)
            .fill()
            .map(() => (
                    <i className="fas fa-star text-yellow-500"></i>
            ))
            }
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div className="mb-5">
                <Currency quantity={price} currency="USD"/>
            </div>
            <button onClick={addToCart} className="mt-auto button">add to cart</button>
        </div>
    )
}

export default Products;
