import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Bar from "./Bar.js";
import Home from "./Home";
import Fave from "./Fave";
// import Footer from "./Footer";
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
      obj: [{}],
      trips: DB.results,
      searchValue: "",
      Counryinput: "",
      Price: [],
      country: [],
      Faves: [],
      inputtext: "",
      inputtext2: "",
      inputtext3: "",
      inputtext4: ""
    };
  }

  addToFav = city => {
    city.preventDefault();
    this.setState({
      Faves: [...this.state.Faves, city]
    });
  };

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
    // console.log("DB :", DB.results.name);
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
        console.log("API data", response.data);
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
          // city: response.data
        });
        console.log(this.state.city);
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  };
  additem = e => {};
  add = e => {
    e.preventDefault();
    // inputtext:e.target.value})
    console.log(this.state.country, " country state");
    console.log(this.state.inputtext, " input text");
    this.setState({
      country: [
        ...this.state.country,
        this.state.inputtext,
        this.state.inputtext2,
        this.state.inputtext3,
        this.state.inputtext4
      ]
      // inputtext: e.target.value
    });
    this.componentDidMount(e.target.value);
    // console.log(this.state.country[0]);
    console.log(this.state.country, " country state");
  };

  typingAdd = e => {
    this.setState({ inputtext: e.target.value });
  };

  typingAdd2 = e => {
    this.setState({ inputtext2: e.target.value });
  };

  typingAdd3 = e => {
    this.setState({ inputtext3: e.target.value });
  };

  typingAdd4 = e => {
    this.setState({ inputtext4: e.target.value });
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
          <div></div>
        </div>
        <div className="City2 ">
          <div></div>
        </div>

        <ListContianer trips={this.state.trips} input={this.state.country}>
          List
        </ListContianer>
        <div>
          <form>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.inputtext}
              onChange={this.typingAdd}
            ></input>
            <br />
            <label>ID</label>
            <input
              type="text"
              name="ID"
              value={this.state.inputtext2}
              onChange={this.typingAdd2}
            ></input>
            <br />
            <label>Score</label>
            <input
              type="text"
              name="score"
              value={this.state.inputtext3}
              onChange={this.typingAdd3}
            ></input>
            <br />
            <label>Currency</label>
            <input
              type="text"
              name="nCurrency"
              value={this.state.inputtext4}
              onChange={this.typingAdd4}
            ></input>
            <button onClick={this.clearList}>ClearList</button>
            <button onClick={this.add}>Add</button>
            <button addToFav={this.addToFav}>fav</button>
          </form>
        </div>

        <Listitem country={this.state.country} />

        {/* <nav>
          <Footer /> <div></div>
        </nav> */}

        {/* <Bar /> */}
      </div>
    );
  }
}
