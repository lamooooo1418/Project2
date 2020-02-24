import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from './Bar.js';
import Home from './Home';
import Fave from './Fave';
import Footer from './Footer';
import DB from './DB';
import City from './City1';
import ReactDOM from 'react-dom';
import Search from './Search';
import TouristPoint from './TouristPoint';
import axios from "axios";
import Delete from './Delete';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city:[],
      searchValue: '',
      Price:[],
      country: [],
      Faves: [] }}

  componentDidMount() {
    // read about this inside axios
    const apiURL = 'https://www.triposo.com/api/20190906/tour.json?annotate=trigram:Amsterdam&trigram=>0.2&account=VHSX48JH&token=60v4hgiq3zyo304rc0p3kfkh19zd224l';
    axios({
      method: 'get',
      url: apiURL
    }).then(response => {
      console.log(response);

      this.setState({
        city: response.data
       }) 
      console.log(this.state.city);

    })

      .catch(err => {
      console.log('ERROR: ', err);
      });

  }
     handleSearchChange = (e) => {
    const textValue = e.target.value;
    console.log(textValue);

    console.log('DB :', DB.results)
    console.log('DB :', DB.results.name)
    const filteredCountry = DB.results.filter(
  (elem)=>{
return elem.name.includes(textValue) 
})
  
   this.setState({
    searchValue: textValue,
    country: filteredCountry,
   // Price : filterdPrice,
 });
  }





  render() {
    

    return (<div>
      <Bar></Bar>
       <img className='logo'     src={require('./logo.png')} alt ="" />
<div>

      </div>
{this.state.country.map((oneCountry)=>{
return <h1>{oneCountry.name}</h1>
})}


<Search value={this.state.searchValue}
  onChange={this.handleSearchChange} />
 <div className='City1 '>
<img src={require('./London.jpg')} alt ="" />
 <div >Welcome to Visit London, your official city guide to London, England. Find things to do in London, days out in London, London attractions and sightseeing, what's on, London events, theatre, tours, restaurants and hotels in London. Plan your trip to London with useful traveller information.</div>                            
</div>
 <div className='City2 ' >City 2
  <div></div>
        <nav>< Footer/> <div>




        </div></nav>                           >
</div>


<Delete></Delete>


      {/* <Bar /> */}
    </div>)
  }

}







/*

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );


}*/
/*
*/
