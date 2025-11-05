import React from 'react';
import { IoMdDoneAll } from "react-icons/io";

const Pricing_display = ({ items }) => {
  const { tier, name, description, price, currency, deliveryTimeInDays, features, revisions } = items;
  return (
    <div className=''>
      <div className=' shadow-xl z-50 shadow-black bg-amber-600 px-2 py-5'>
        <h3 className='text-3xl'>{tier}</h3>
        <h1 className='text-2xl'>{name}</h1>
        <h3 className='text-xl text-lime-700'>Completed In {price} {currency}</h3>
        <h3 className='text-xl'>Delivery in {deliveryTimeInDays} days</h3>
      </div>
      <div className='bg-amber-500 mx-3 px-2 py-2'>
        <h2 className='text-xl'>{description}</h2>



        {features.map(feature_item =>
          <li className='px-4 list-none flex flex-row items-center gap-1 py-2'><IoMdDoneAll /> {feature_item.name} <span>{feature_item.included ? "(Included)" : "(Not Included)"}</span></li>)}
        <h3 className='mx-2'>Total Revision : {revisions}</h3>


      </div>
          <button className="btn w-full bg-amber-700 px-2 py-2">Subscribe</button>
    </div>  
  );
};

export default Pricing_display;