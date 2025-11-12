import React from 'react';

const ProductTable = ({ newProduct }) => {



  return (
    <div>
      <h3>{newProduct.length}</h3>
      <table>
        <thead>

          <tr>
            <td>ID</td>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
          </tr>

        </thead>
        <tbody>


          {
            newProduct.map((items,index) =>
              <tr>
                <td>{index+1}</td>
                <td>{items.name}</td>
                <td>{items.price}</td>
                <td>{items.quantity}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;