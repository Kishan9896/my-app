import React from 'react';

function Loading(Component) {
    return function loadingwithhome({isLoading, useData}){
        if (isLoading) {
            return (
                <p>Loading...!</p>
            )
        } else {
            return(
                <Component useData={useData}/>
            )
        }
    }
}

export default Loading;