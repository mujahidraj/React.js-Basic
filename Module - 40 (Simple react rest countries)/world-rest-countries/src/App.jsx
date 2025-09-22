import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/countries'

const countriesFetch = fetch ('https://restcountries.com/v3.1/independent?status=true')
.then(res=>res.json());



function App() {
  return (
    <>
    <Suspense fallback={<h3>Countries are loading...</h3>}>
            <Countries countriesFetch={countriesFetch}></Countries>

    </Suspense>
    </>
  )
}

export default App
