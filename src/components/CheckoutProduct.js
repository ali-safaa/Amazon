import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromBasket } from "../slices/basketSlice"
function CheckoutProduct(props) {
    const {id, category, image, title, rating, description, price} = props;
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(removeFromBasket({id}))
    }
    return (
        <div key={id} className="m-5 p-2 bg-white space-y-2 border grid grid-cols-5">
            <p className="text-xs text-gray-400 sm:text-lg">{category}</p>
           <img className="w-[200px] h-[200px] sm:w-[200px] object-contain m-auto" src={image} alt="" />
           <div className="col-span-3">
           <p className="text-lg text-center">{title}</p>
           <p className="mt-2 ml-2 line-clamp-4 text-xs">{description}</p>
            <div className="flex justify-center my-2">
            {Array(rating)
            .fill()
            .map(() => (
                <i className="fas fa-star text-yellow-500 "></i>
                ))
            }
            </div>
            <strong className="flex justify-center">{price}$</strong>
            <button onClick={removeFromCart} className="bg-yellow-300 py-2 px-10 rounded-xl font-bold text-xs sm:text-sm grid m-auto w-max hover:bg-black hover:text-white transform transition duration-200">Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
