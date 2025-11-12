import React from 'react';

const ProductForm = () => {
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
      console.log(newProduct);
      
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="product"  placeholder='Product nme' /><br />
        <input type="text" name="price" placeholder='Product Price'/><br />
        <input type="text" name="quantity" placeholder='Product Quantity'/><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProductForm;