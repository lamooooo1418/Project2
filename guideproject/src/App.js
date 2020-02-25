import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Bar from "./Bar.js";
import Home from "./Home";
import Fave from "./Fave";
import Footer from "./Footer";
import DB from "./DB";

import ReactDOM from "react-dom";
import Search from "./Search";
import TouristPoint from "./TouristPoint";
import axios from "axios";
import Delete from "./Delete";
import Listitem from "./listitem";
import ListContianer from "./ListContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [],
      obj={['']},
      trips: DB.results,
      searchValue: "",
      Counryinput: "",
      Price: [],
      country: [],
      Faves: [],
      inputtext: ""
    };
  }

  componentDidMount() {
    // read about this inside axios
    const apiURL =
      "https://www.triposo.com/api/20190906/tour.json?annotate=trigram:Amsterdam&trigram=>0.2&account=VHSX48JH&token=60v4hgiq3zyo304rc0p3kfkh19zd224l";
    axios({
      method: "get",
      url: apiURL
    })
      .then(response => {
        console.log(response);
        //  const Country11 = DB.results.map(
        // (elem,index)=>{const City={name:response.data.results}})
        const cityofOb = {
          name: response.data.name,
          id: response.data.id,
          score: response.data.score,
          Price: response.data.score,
          Currency: response.data.currency
        };

        this.setState({
          city: [cityofOb]
        });
        console.log(this.state.city);
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  }
  handleSearchChange = e => {
    const textValue = e.target.value;
    console.log(textValue);

    console.log("DB :", DB.results);
    console.log("DB :", DB.results.name);
    const filteredCountry = DB.results.filter(elem => {
      return elem.name.includes(textValue);
    });
    this.setState({
      searchValue: textValue,
      city: filteredCountry
      // Price : filterdPrice,
    });
  };
  Search = e => {
    const apiURL =
      "https://www.triposo.com/api/20190906/tour.json?annotate=trigram:Amsterdam&trigram=>0.2&account=VHSX48JH&token=60v4hgiq3zyo304rc0p3kfkh19zd224l";
    axios({
      method: "get",
      url: apiURL
    })
      .then(response => {
        console.log(response);
        //  const Country11 = DB.results.map(
        // (elem,index)=>{const City={name:response.data.results}})
        const cityofOb = {
          name: response.data.name,
          id: response.data.id,
          score: response.data.score,
          Price: response.data.score,
          Currency: response.data.currency
        };

        this.setState({
          city: [cityofOb]
        });
        console.log(this.state.city);
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  };

  add = () => {
    // inputtext:e.target.value})
    console.log(this.state.country, " country state");
    console.log(this.state.inputtext, " input text");
    this.setState({
      country: [...this.state.country, this.state.inputtext]
    });
    // console.log(this.state.country[0]);
    console.log(this.state.country, " country state");
  };

  typingAdd = e => {
    this.setState({ inputtext: e.target.value });
  };
  clearList = () => {
    this.setState({
      country: []
    });
  };

  render() {
    return (
      <div>
        <div>Tourist Guide List </div>
        <img className="logo" src={require("./logo.png")} alt="" />
        <div></div>
        {this.state.country.map(oneCountry => {
          console.log(oneCountry.name);
          return <h1>{oneCountry.name}</h1>;
        })}

        <Search
          value={this.state.searchValue}
          onChange={this.handleSearchChange}
        />

        {/* <City onChange={this.handleSearchChange}    /> */}
        <div className="City1 ">
          {/*<img src={require('./London.jpg')} alt ="" />*/}
          <div>
            Welcome to Visit London, your official city guide to London,
            England. Find things to do in London, days out in London, London
            attractions and sightseeing, what's on, London events, theatre,
            tours, restaurants and hotels in London. Plan your trip to London
            with useful traveller information.
          </div>
        </div>
        <div className="City2 ">
          City 2<div></div>
        </div>

        <ListContianer trips={this.state.trips}>List</ListContianer>
        <input
          type="text"
          value={this.state.inputtext}
          onChange={this.typingAdd}/>

        <button onClick={this.add}>Add</button>
        <Listitem country={this.state.obj} />
        <button onClick={this.clearList}>ClearList</button>
        <nav>
          <Footer /> <div></div>
        </nav>

        {/* <Bar /> */}
      </div>
    );
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
