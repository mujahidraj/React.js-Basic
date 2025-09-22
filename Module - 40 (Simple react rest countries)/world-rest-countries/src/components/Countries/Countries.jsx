import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesFetch }) => {

    const [visitedCountries , setVisitedCountries ] = useState([])

    const countries = use(countriesFetch);

    const handleVisitedCountries =(country)=>{
        console.log("hello world",country);
        
    }


    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            <div className='countries'>
                {countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} country={country}></Country>)}
            </div>

        </div>
    );
};

export default Countries;