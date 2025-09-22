import React from 'react';

const Country = ({country}) => {
    
    
    return (
        <div>
            <h3>Name : {country.name.common} </h3>
            <img src={country.flags.png} alt="" />
            <h5>LandLocked : {country.landlocked  ? 'YES' : 'NO'}</h5>
            <h5>Population : {country.population}</h5>
        </div>
    );
};

export default Country;