import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Home from './Home';
import Loading from './Loading';

const Homedata = Loading(Home)

function Hoc_data(props) {
    const [loading, setLoading] = useState(false);
    const [data, setdata] = useState([]);

    const dataOrg = [
        {id: 101, name:'Amit'},
        {id: 101, name:'Ajay'}
    ]

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {setLoading(false); setdata(dataOrg)}, 2000)
    }, [])

    return (
        <div>
            <Homedata isLoading={loading} useData={data} />
        </div>
    );
}

export default Hoc_data;