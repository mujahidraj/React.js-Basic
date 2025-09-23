import { Suspense } from 'react';
import './App.css'
import Products from './Components/Products/Products';

const productsFetch = fetch('https://fakestoreapi.com/products')
  .then(res => res.json());

function App() {

  return (
    <>
      <Suspense fallback={<h3>Products are getting ready, please wait for a while ... Thank you!</h3>}>
        <Products productsFetch={productsFetch}></Products>
      </Suspense>
    </>
  )
}

export default App
