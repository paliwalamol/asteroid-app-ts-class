import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import AsteroidInfo from './AsteroidInfo';
import '../App.css';


export class Asteroid extends Component<any,any>{
   
  render() {
    if (this.props.data.length === 0 ||this.props.data?.code===405) {
        return (
            <>
            <div className='error'>
            <Link to='/' className='button'>back to home</Link>
                
                <div>something went wrong...</div>
                </div>
            </>
            )}
    return (
        <>
        <AsteroidInfo data={this.props.data} />
        <Link to='/' className='button'>back to home</Link>
        </>
    )
  }
}

export default Asteroid