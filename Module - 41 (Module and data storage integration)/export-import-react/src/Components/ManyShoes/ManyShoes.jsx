import React, { use, useState } from 'react';
import Shoes from '../Shoes/Shoes';
import './ManyShoes.css';
import { addToStoreCart } from '../../utils/localStorage';

const ManyShoes = ({ fetchShoe }) => {

   

    const shoes = use(fetchShoe);
    
     const [cart, setCart] = useState([])


    const handleAddToCart = (list) => {
     
        const newCart = [...cart, list]
        setCart(newCart)
        console.log(list);
        
        addToStoreCart(list.id)
        

    }

    



    return (
        <div>
            <h2>Total Product : {shoes.length}</h2>
            <h4>Buy Product : {cart.length}</h4>
            <ol>Product Model : {cart.map(brands=><li>{brands.model}</li>)}</ol>
            <div className="many-shoes-div">
                {
                    shoes.map(list => <Shoes handleAddToCart={handleAddToCart} key={list.id} list={list} ></Shoes>)
                }
            </div>
        </div>
    );
};

export default ManyShoes;