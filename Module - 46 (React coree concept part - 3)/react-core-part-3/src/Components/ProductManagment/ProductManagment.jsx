import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagment = () => {

  const [product, setProduct] = useState([])

  const handleProduct =(newProducts)=>{
    const newProduct = [...product,newProducts]
    setProduct(newProduct)
  }

  return (
    <div>
      <ProductForm handleProduct={handleProduct}></ProductForm>
      <ProductTable newProduct={product}></ProductTable>
    </div>
  );
};

export default ProductManagment;