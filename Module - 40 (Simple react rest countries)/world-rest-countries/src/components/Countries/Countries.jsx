import React, { use } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesFetch }) => {
    const countries = use(countriesFetch);



    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            <div className='countries'>
                {countries.map(country => <Country key={country.cca3} country={country}></Country>)}
            </div>

        </div>
    );
};

export default Countries;