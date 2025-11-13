import React, { useState } from 'react';

const ProductForm = ({handleProduct}) => {

  const  [error , setError] = useState('')

    const handleSubmit =(e)=>{
      e.preventDefault()
      const name = e.target.product.value;
      const price = e.target.price.value;
      const quantity = e.target.quantity.value;

      const newProduct ={
        name,
        price,
        quantity
      }

      if(name.length<=0){
        setError("Please enter a valid product name.")
      return
      }
      else if(price<0){
        setError("Price cant be negative.")
        return
      }
      else if(price<=0){
        setError("please enter a valid price")
        return
      }
      else if(quantity<=0){
        setError('please enter a qunaitity at least.')
      }
      else{
       handleProduct(newProduct)
       setError("")
      }


    }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="product"  placeholder='Product nme' /><br />
        <input type="text" name="price" placeholder='Product Price'/><br />
        <input type="text" name="quantity" placeholder='Product Quantity'/><br />
        <input type="submit" value="Submit" />
      </form>
      <p><small>{error}</small></p>
    </div>
  );
};

export default ProductForm;