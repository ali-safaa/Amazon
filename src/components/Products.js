import React from 'react'
function Products(props) {
    const {title, price, image, rating, description, category} = props;
    return (
        <div className="relative flex flex-col m-5 p-2 bg-white space-y-2 border">
            <h4 className="text-gray-400">{category}</h4>
            <img className="w-[200px] sm:w-[300px] m-auto" src={image} alt="" />
            <h3 className="text-lg text-center">{title}</h3>
            <div className="flex justify-center">
            {Array(rating)
            .fill()
            .map(() => (
                    <i className="fas fa-star text-yellow-500 "></i>
            ))
            }
            </div>
            <p className="px-2">{description}</p>
            <strong className="flex justify-center">{price}$</strong>
            <button className="bg-yellow-300 py-2 px-10 rounded-xl font-bold text-sm sm:text-lg grid m-auto hover:bg-black hover:text-white transform transition duration-200">add to cart</button>
        </div>
    )
}

export default Products
