import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect, useState } from 'react';

function TimeFun(props) {

    const [Time, SetTime] = useState(new Date());

    const tick = () => {
        SetTime(new Date());
    }
    
    useEffect (() => {
        const TimeI = setInterval(() => tick(), 1000);

        return() => {
            clearInterval(TimeI);
        }
    }, [Time]);

    return (
        <div>
            <p>{Time.toLocaleTimeString()}</p>
        </div>
    );
}

export default TimeFun;