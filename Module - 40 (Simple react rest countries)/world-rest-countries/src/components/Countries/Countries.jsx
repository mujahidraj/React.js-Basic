import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesFetch }) => {

    const [visitedCountries , setVisitedCountries ] = useState([])
    const [visitedFlags , setVisitedFlags] = useState([])

    const countries = use(countriesFetch);

    const handleVisitedCountries =(country)=>{
        console.log("hello world",country);
        const newVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
        
    }

    const handleVisitedFlags=(country)=>{
        const newVisitedFlags = [...visitedFlags,country]
        setVisitedFlags(newVisitedFlags)
    }


    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            <h4>Visited country number : {visitedCountries.length}</h4>
            <h4>Visited flag : {visitedFlags.length}</h4>
            <div >
                {visitedFlags.map((flags,index)=><img className='flags-size' key={index} src={flags} alt="" />)}
            </div>
            <ol> {visitedCountries.map(list=><li>{list.name.common}</li>)}</ol>
            <div className='countries'>
                {countries.map(country => <Country key={country.cca3} handleVisitedFlags={handleVisitedFlags} handleVisitedCountries={handleVisitedCountries} country={country}></Country>)}
            </div>

        </div>
    );
};

export default Countries;