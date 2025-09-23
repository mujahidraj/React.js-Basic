import { useState } from 'react';
import './Product.css'

const Product = ({ list , handleCart , handleBuyProduct }) => {
    
    const [carted , setCarted ]= useState(false)
    const [buy , setBuy] = useState(false)

    const handleBuy = ()=>{
        setBuy(!buy)
        handleBuyProduct(list)

    }

    const handdleCarted = ()=>{
        setCarted(!carted)
        handleCart();
    }
  

    return (
        <div className={`main-div ${carted   && "main-div-2"}`}>
            <img className='image-size' src={list.image} alt="" />
            <h3>Product Name : {list.title}</h3>
            <div className='price-section'>
                <h4><b>Price : {list.price}$</b></h4>
                <h4><b>Category : {list.category}</b></h4>
            </div>
            <h5>Description : {list.description}</h5>
            <button onClick={ handdleCarted }>Add Cart</button>
            <button onClick={handleBuy}>Buy Now</button>
        </div>
    );
};

export default Product;