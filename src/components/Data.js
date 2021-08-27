import React from 'react'
function Data(props) {
    const {name, img, id} = props;
    return (
       <div>
           <h1>{name}</h1>
           <img src={img} alt="" />
       </div>
    )
}

export default Data
