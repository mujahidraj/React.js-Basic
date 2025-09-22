import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesFetch}) => {
    const countries = use (countriesFetch);

    
    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            {countries.map(country => <Country key={country.cca3} country={country}></Country>)}
        </div>
    );
};

export default Countries;