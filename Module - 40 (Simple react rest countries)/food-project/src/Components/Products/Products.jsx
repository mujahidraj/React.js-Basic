import React, { use, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = ({productsFetch}) => {

    const [cart , setCart] = useState(0)

    const handleCart=()=>{
        const newCart = cart+1;
        setCart(newCart)
    }

    const [buy , setBuy] = useState([])
    
    const handleBuyProduct =(list)=>{
       const newBuy = [...buy,list] 
       setBuy(newBuy)
    }

    const products = use (productsFetch)
    
    return (
        <>
         <h2>Product in Cart : {cart} </h2>
         <ol>Product : {buy.title}</ol>
        <div className='product-parent'>

           


           { products.map(list=><Product cart={cart} handleBuyProduct={handleBuyProduct} handleCart={handleCart} key={list.id} list={list}></Product>)}
        </div>
        </>
    );
};

export default Products;