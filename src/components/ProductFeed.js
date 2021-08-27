import React from 'react'

function ProductFeed(props) {
    return (
        <div className="grid grid-cols-2">
           <div className="relative ">
           <img className="w-[100px]" src={props.image} alt="" />
           </div>
        </div>
    )
}

export default ProductFeed
