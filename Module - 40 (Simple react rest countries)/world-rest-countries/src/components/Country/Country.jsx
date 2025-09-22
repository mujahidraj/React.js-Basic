import React, { useState } from 'react';
import './country.css'

const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {

    const [visited , setVisited] = useState(false)
    
    const handleVisited =()=>{
        alert("are you sure? ")
        
         setVisited(!visited);
         handleVisitedCountries(country);
         
        
    }
    
    return (
        // dynamic styling
        <div className={`country ${visited && "country-not-visited"}`}>
            <h3>Name : {country.name.common} </h3>
            <img src={country.flags.png} alt="" />
            <h5>LandLocked : {country.landlocked  ? 'YES' : 'NO'}</h5>
            <h5>Population : {country.population}</h5>
            <button onClick={handleVisited}>
                {
                    visited ? "Visited"  : "Not Visited"
                }
            </button>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Visited Flag</button>
        </div>
    );
};

export default Country;