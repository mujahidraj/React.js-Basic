

import { Suspense } from 'react'
import './App.css'
import NavBar from './Components/nav-bar/NavBar'
import PricingOption from './Components/PricingOption/PricingOption'
import Pricing_display from './Components/PricingOption/Pricing_display'
import ResultGraph from './Components/Graph/ResultGraph'

function App() {

  return (
    <>
      <div>
        <NavBar></NavBar>
        {/* <span class="loading loading-ring loading-lg"></span>*/}

        <Suspense fallback={<span class="loading loading-ring loading-lg"></span>}>
        <PricingOption></PricingOption></Suspense>
        
        <ResultGraph></ResultGraph>
      </div>
    </>
  )
}

export default App
