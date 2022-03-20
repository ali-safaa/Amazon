import Image from 'next/image';
import { useState } from 'react';
import ReactCurrencyFormatter from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
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
    <div className="flex flex-col my-3 mx-3 relative shadow-sm bg-white py-5 px-5">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="mt-3 font-semibold">{title}</h4>
      <div className="mt-3 font-semibold text-sm text-gray-500">
        <ReactCurrencyFormatter quantity={price} currency="USD" />
      </div>
      <p className="mt-3 text-xs md:text-sm text-gray-500 line-clamp-3">
        {description}
      </p>
      <div>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <i className="fas fa-star mt-3 text-yellow-500"></i>
          ))}
      </div>
      {hasPrime && (
        <p className="text-black font-semibold text-sm my-3">has Prime</p>
      )}
      <button onClick={addItemsToBasket} className="button">
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
