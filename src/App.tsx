import React, { Component } from 'react'
import {Route,Routes} from 'react-router-dom'
import {AppWithProps} from './components/Home';
import Asteroid from './components/Asteroid';
import './App.css';
interface Iprops{
  
}
interface Idata{
  data:string,
  loading:boolean,
}
export class App extends Component<Iprops,Idata> {
  constructor(props:Iprops){
    super(props);
    this.state = {
      data:'',
      loading:false,
    }
  }
  setData = (data:string) => {
    this.setState({data:data});
  }
  setLoading = (loading:boolean) => {
    this.setState({loading:loading});
  }
  render() {
    return (
      <>
      <Routes>
      <Route path="/" element={<AppWithProps data={this.state.data} setData={this.setData} loading={this.state.loading} setLoading={this.setLoading}/>}/>
      <Route path="/asteroidInfo" element={<Asteroid data={this.state.data}/>}/>
      <Route path="*" element={<div>404 not found</div>}/>
      
      </Routes>
      </>
    )
  }
}

export default App