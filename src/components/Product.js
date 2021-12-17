import Image from "next/image";
import { useState } from "react";
import ReactCurrencyFormatter from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const [hasPrime] = useState(Math.random() < 0.5);

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const addItemsToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };
    // seding the product as an action to the redux store ... the basket slice
    dispatch(addToBasket(product));
  };
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="mt-3">{title}</h4>
      <div>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <i className="fas fa-star mt-3 text-yellow-500"></i>
          ))}
      </div>
      <p className="mt-3 text-sm line-clamp-3">{description}</p>
      <div className="mt-3 font-bold">
        <ReactCurrencyFormatter quantity={price} currency="USD" />
      </div>
      {hasPrime && (
        <p className="mt-1 bg-blue-400 w-max px-3 py-2 text-white font-bold">
          has Prime
        </p>
      )}
      <button onClick={addItemsToBasket} className="mt-3 button">
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
