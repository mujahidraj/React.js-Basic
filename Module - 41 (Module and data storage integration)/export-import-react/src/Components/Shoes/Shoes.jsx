import React from 'react';
import './Shoes.css'

const Shoes = ({ list }) => {
    console.log(list);

    return (
        <div className='shoe-div'>
            <img src={list.image} alt="" />
            <h2>Brand : {list.brand}</h2>
            <h3>Model : {list.model}</h3>
            <div>
                <p>Price : ${list.price}</p>
                {list.colors.map(colorList => <button>{colorList}</button>)}
                {list.sizes.map(sizeList => <button>{sizeList}</button>)}

            </div>
        </div>
    );
};

export default Shoes;