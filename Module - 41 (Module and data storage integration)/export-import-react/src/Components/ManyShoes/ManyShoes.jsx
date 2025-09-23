import React, { use, useState } from 'react';
import Shoes from '../Shoes/Shoes';
import './ManyShoes.css';

const ManyShoes = ({fetchShoe}) => {

    const [cart , setCart] = useState([])

    const handleAddToCart =(list)=>{
    const newCart = [...cart, list]    
    console.log(newCart);
       
    }

    const shoes= use(fetchShoe);
    console.log(shoes);
    
    return (
        <div>
            <h2>Total Product : {shoes.length}</h2>
        <div className="many-shoes-div"> 
            {
                shoes.map(list=><Shoes  handleAddToCart={handleAddToCart} key={list.id} list={list} ></Shoes>)
            }
        </div>
        </div>
    );
};

export default ManyShoes;