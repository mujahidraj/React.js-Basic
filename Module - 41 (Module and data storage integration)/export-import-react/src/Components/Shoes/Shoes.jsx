import React from 'react';
import './Shoes.css'

const Shoes = ({ list, handleAddToCart ,handleProduct}) => {
    

    return (
        <div className='shoe-div'>
            <img src={list.image} alt="" />
            <h2>Brand : {list.brand}</h2>
            <h3>Model : {list.model}</h3>

            <p>Price : ${list.price}</p>
            {list.colors.map(colorList => <button>{colorList}</button>)}
            <br />
            {list.sizes.map(sizeList => <button>{sizeList}</button>)}
            <br />
            <button onClick={()=>{
                handleAddToCart(list)
                handleProduct(list)
            }}>Buy Now</button>

        </div>
    );
};

export default Shoes;