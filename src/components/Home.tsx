import React, { Component } from 'react'
import { useNavigate } from 'react-router';
import { asteroidData } from './data.mjs';
import '../App.css';
interface Idata{
    asteroids:string
}
export class Home extends Component<any,Idata> {
    constructor(props:any){
        super(props);
        this.state = {
            asteroids:'',
        }        
    }
    
    getAsteroidData = (data:string)=>{
        this.props.setLoading(true);
        
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/${data}?api_key=QETr2ndn8g0nmqAEhHOtoVepviRecGwJuylNhV2a`)
        .then((res)=>res.json())
        .then((data)=>
        {
            this.props.setData(data);
            this.props.setLoading(false);
            this.props.navigate('/asteroidInfo');
        }).catch((err)=>{
            console.log(err);
            this.props.setLoading(false);
            this.props.setData('');
            this.props.navigate('/asteroidInfo');
        });
    }
    getRandom=()=>{
        let random:number = Math.floor(Math.random()*asteroidData.length);
        this.getAsteroidData(asteroidData[random]);
    }
  render() {
    return (
        <>
        <h1>Asteroid App</h1>
        <form onSubmit={e=>e.preventDefault()}>
        <input type="text" placeholder='enter asteroid id' value={this.state.asteroids} onChange={(e)=>this.setState({asteroids:e.target.value})}/>
        <button type="submit" onClick={()=>this.getAsteroidData(this.state.asteroids)}>Get Asteroid Data</button>
        <button type="submit" onClick={this.getRandom}>Get Random Asteroid Information</button>
        </form>
        {this.props.loading && <h1>Loading...</h1>}
        </>
    )
  }
}
export function AppWithProps(props:any) {
    const navigate = useNavigate();
  return <Home navigate={navigate} data={props.data} setData={props.setData} loading={props.loading} setLoading={props.setLoading}/>;
}
export default AppWithProps;