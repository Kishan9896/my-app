import React from 'react';

function Home(props) {


    return (
        <div>
            {
            props.useData.map((a, i) => {
                return (
                    <>
                    <h3>{a.id}</h3>
                    <h4>{a.name}</h4>
                    </>
                )
            })
            }
        </div>
    );
}

export default Home;