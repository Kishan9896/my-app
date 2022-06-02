import React, { Component } from 'react';

class city extends Component {
    constructor(props) {
        super(props);
        this.city = {
            cityName: 'Surat'
        }
    }
    changeCity = () => {
        this.changeCity({
            cityName: 'Baroda'
        });
    }
    
    
    render() {
        return (
            <div>
                <p>{this.city.cityName}</p>
                <button onClick={() => this.changeCity()}>Change City</button>   
            </div>
        );
    }
}

export default city;