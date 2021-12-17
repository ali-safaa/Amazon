import React, { useState } from "react";
import Image from "next/image";
import ReactCurrencyFormatter from "react-currency-formatter";
import { removeFromBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

function CheckoutProducts({ id, title, price, description, category, image, hasPrime }) {
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  
  const dispatch = useDispatch();
  const [rating] = useState( Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING );
  const removeItemsFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="flex items-center">
      <img className="w-[100px] sm:w-[200px] ml-3 mt-3" src={image} alt="product" />
          <div className="flex-grow">
            <h4 className="ml-3 font-bold sm:text-lg">{title}</h4>
            <p className="ml-3 mt-2 text-xs sm:text-sm line-clamp-2">{description}</p> 
          <div className="flex items-center text-xs sm:text-sm ml-3 my-3 text-yellow-400">
            {Array(rating).fill().map((_, i) => 
            (<i className="fas fa-star"></i>
            ))  }
          </div>
          <h4 className="ml-3 font-bold text-xs sm:text-sm"><ReactCurrencyFormatter quantity={price} currency="USD" /></h4>
          {hasPrime && (
        <p className="ml-3 text-xs mt-2 text-blue-400 font-bold">HAS PRIME</p>
        )} 
          </div>
          <button onClick={removeItemsFromBasket} className="text-xs button sm:ml-3 w-full sm:w-max mr-3 ml-3">Remove From Cart</button>
    </div>
  );
}

export default CheckoutProducts;
