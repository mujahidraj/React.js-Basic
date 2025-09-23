import React, { use, useState } from 'react';
import Shoes from '../Shoes/Shoes';
import './ManyShoes.css';

const ManyShoes = ({ fetchShoe }) => {

   

    const shoes = use(fetchShoe);
    
     const [cart, setCart] = useState([])

     const [product , setProduct] = useState([])

     const handleProduct =(production)=>{
        const newProduct = [...product,production]
        setProduct(newProduct)
        console.log(production);
     }
    

    const handleAddToCart = (list) => {
     
        const newCart = [...cart, list]
        setCart(newCart)
        console.log(list);
        
        
        

    }

    return (
        <div>
            <h2>Total Product : {shoes.length}</h2>
            <h4>Buy Product : {cart.length}</h4>
            <ol>Product Model : {cart.map(brands=><li>{brands.model}</li>)}</ol>
            <div className="many-shoes-div">
                {
                    shoes.map(list => <Shoes handleProduct={handleProduct} handleAddToCart={handleAddToCart} key={list.id} list={list} ></Shoes>)
                }
            </div>
        </div>
    );
};

export default ManyShoes;