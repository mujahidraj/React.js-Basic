import React from 'react';
import './country.css'

const Country = ({country}) => {
    
    const handleVisited =()=>{
        alert("Are sure your are visited?")
        
    }
    
    return (
        <div className='country'>
            <h3>Name : {country.name.common} </h3>
            <img src={country.flags.png} alt="" />
            <h5>LandLocked : {country.landlocked  ? 'YES' : 'NO'}</h5>
            <h5>Population : {country.population}</h5>
            <button onClick={handleVisited}>Not visited</button>
        </div>
    );
};

export default Country;