import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesFetch }) => {

    const [visitedCountries , setVisitedCountries ] = useState([])

    const countries = use(countriesFetch);

    const handleVisitedCountries =(country)=>{
        console.log("hello world",country);
        const newVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
        
    }


    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            <h4>Visited country number : {visitedCountries.length}</h4>
            <ol> {visitedCountries.map(list=><li>{list.name.common}</li>)}</ol>
            <div className='countries'>
                {countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} country={country}></Country>)}
            </div>

        </div>
    );
};

export default Countries;