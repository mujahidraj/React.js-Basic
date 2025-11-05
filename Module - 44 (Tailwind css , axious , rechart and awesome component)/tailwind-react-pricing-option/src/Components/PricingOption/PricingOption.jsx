import React, { useEffect, useState } from 'react';
import Pricing_display from './Pricing_display';

const PricingOption = () => {

  const [packages , setPackages] = useState([])

  useEffect(()=>{
    fetch('pricing.json').then(res=>res.json()).then(data=>setPackages(data))
  },[])

  
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 mt-10 gap-10 mx-10'>
      {packages.map(items=><Pricing_display  items={items}></Pricing_display>)}
    </div>
  );
};

export default PricingOption;