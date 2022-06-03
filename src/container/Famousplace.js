import React, { useState } from 'react';

function Famousplace(props) {
    return (
        <div>
            {props.Country_Name === 'India' ? <p>Tajmahal</p> : <p>Whitehouse</p>}
        </div>
    );
}

export default Famousplace;