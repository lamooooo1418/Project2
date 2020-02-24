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
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      country: [],
      Faves: [] }}

  componentDidMount() {
    const apiURL = 'https://www.triposo.com/api/20190906/tour.json?annotate=trigram:Amsterdam&trigram=>0.2&account=VHSX48JH&token=60v4hgiq3zyo304rc0p3kfkh19zd224l';
    axios({
      method: 'get',
      url: apiURL
    }).then(response => {
      console.log(response);

      this.setState({
        country: response.data.results.name
      }) 
      console.log(this.state.country);

    })

      .catch(err => {
      console.log('ERROR: ', err);
      });

  }
     handleSearchChange = (e) => {
    const textValue = e.target.value;
    console.log(textValue);

    const filteredCountry = this.props.data.results.name.filter(function (country) { return textValue }
    )
    this.setState({
      searchValue: textValue,
      country: filteredCountry,
 });
  }





  render() {

    return (<div>
<div>

      Who is GuideTourist :
      </div>



    <Bar  />  
<Search value={this.state.searchValue}
  onChange={this.handleSearchChange} />
 <div className='City1 '>
   <img src="./London.jpeg" alt ="" />
  <div >Welcome to Visit London, your official city guide to London, England. Find things to do in London, days out in London, London attractions and sightseeing, what's on, London events, theatre, tours, restaurants and hotels in London. Plan your trip to London with useful traveller information.</div>                            
</div>
 <div><img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F86%2FCity_of_London%252C_seen_from_Tower_Bridge.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCity_of_London&tbnid=uWd-s6hIaRMHjM&vet=12ahUKEwiC4bnYiernAhXK3eAKHW1FBNsQMygCegUIARDfAQ..i&docid=imQlILDG9brrOM&w=5993&h=3985&q=london&safe=active&client=safari&ved=2ahUKEwiC4bnYiernAhXK3eAKHW1FBNsQMygCegUIARDfAQ' alt="" className="img-responsive"/><span>Hello {this.props.name}</span></div>;
      <div className='City2 ' >City 2
        <img src="London.jpeg.png"    alt=""/>
        <div></div>
        <nav>< Footer/> <div>

        </div></nav>                           >
</div>





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
