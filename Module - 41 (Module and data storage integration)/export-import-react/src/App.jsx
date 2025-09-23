import { Suspense } from 'react'
import './App.css'
import ManyShoes from './Components/ManyShoes/ManyShoes'

const fetchShoe = fetch('./shoes.json').then(res=>res.json());


function App() {

  return (
    <>
      <Suspense fallback={<h3>Shoes are getting ready... Please wait !</h3>}>
        <ManyShoes fetchShoe = {fetchShoe}></ManyShoes>
      </Suspense>
    </>
  )
}

export default App
