import React, { useState } from 'react';
import Famousplace from './Famousplace';

function Country(props) {
    const [CountryName, setCountryname] = useState('India');

    const changeCountry = () => {
        setCountryname('Us');
    }

    return (
        <div>
            <p>{CountryName}</p>
            <button onClick={() => changeCountry()}>Change Country</button>
            <Famousplace id = 'Famous' Country_Name = {CountryName}/>
        </div>
    );
}

export default Country;