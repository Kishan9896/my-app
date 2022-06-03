import React, { useState } from 'react';

function Cityfun(props) {
    const [cityName, setCityname] = useState('Surat');

    const changeCity = () => {
        setCityname('Baroda');
    }

    return (
        <div>
            <p>{cityName}</p>
            <button onClick={() => changeCity()}>Change City</button>
        </div>
    );
}

export default Cityfun;