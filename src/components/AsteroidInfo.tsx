import React, { Component } from 'react';
import '../App.css';

export class AsteroidInfo extends Component<any,any> {
  render() {
    return (
        <div data-testId='wrapper' className="wrapper" style={{backgroundColor:this.props.data.is_potentially_hazardous_asteroid?'#e93c3c91':'#5dcb3b91'}}>
        <h1>Asteroid Name={this.props.data.name}</h1>
        <p data-testId='diameter'>Estimated diameter: min:{this.props.data.estimated_diameter.kilometers.estimated_diameter_min}km  max:{this.props.data.estimated_diameter.kilometers.estimated_diameter_max}km</p>
        </div>
    )
  }
}

export default AsteroidInfo