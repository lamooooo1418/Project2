import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Fave from "./Fave";
// import Footer from "./Footer";
import DB from "./DB";
import Search from "./Search";
import axios from "axios";
import Listitem from "./listitem";
import ListContianer from "./ListContainer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
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
      score: [],
      currency: [],
      id: [],
      Faves: [],
      inputtext: "",
      inputtext2: "",
      inputtext3: "",
      inputtext4: ""
    };
  }
  DeleteOneitem = () => {
    this.setState({
      country: [...this.state.country, this.state.country],
      score: [...this.state.score, this.state.score],

      currency: [this.state.currency, this.state.currency],
      id: [...this.state.id, this.state.id]
    });
  }; //Proccessing
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
          city: []
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

  add = e => {
    e.preventDefault();
    // inputtext:e.target.value})
    console.log(this.state.country, " country state");
    console.log(this.state.inputtext, " input text");
    this.setState({
      country: [...this.state.country, this.state.inputtext2],
      id: [...this.state.id, this.state.inputtext],
      score: [...this.state.score, this.state.inputtext4],
      currency: [...this.state.currency, this.state.inputtext3]

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
      country: [],
      id: [],
      currency: [],
      score: []
    });
  };

  render() {
    return (
      <div className="Div1">
        <div className="Title"> Tourist Guide List </div>
        <img className="logo" src={require("./logo.png")} alt="" />
        <Fave />

        <div>
          <Search
            value={this.state.searchValue}
            onChange={this.handleSearchChange}
          />
          <p> </p> <p> </p> <p> </p>
          <p> </p>
        </div>
        {this.state.trips.map(oneCountry => {
          console.log(oneCountry.name);
          return (
            <div>
              <table border="3" className="Table">
                <td> ID:</td>
                <td>{oneCountry.id}</td>

                <tr>
                  <td>Name: </td>
                  <td>{oneCountry.name}</td>
                </tr>
                <tr>
                  <td>Currency: </td>
                  <td> {oneCountry.price.currency}</td>
                </tr>

                <tr>
                  <td>Score:</td>
                  <td> {oneCountry.score}</td>
                </tr>
              </table>
              <p> </p>
              <p> </p>
            </div>
          );
        })}

        <div className="City1 ">
          <div></div>
        </div>
        <div className="City2 ">
          <div></div>
        </div>

        <div>
          <form>
            <label>Name:-</label>
            <input type="text" name="name" onChange={this.typingAdd}></input>
            <br />
            <label>ID:-</label>
            <input type="text" name="ID" onChange={this.typingAdd2}></input>
            <br />
            <label>Score:-</label>
            <input type="text" name="score" onChange={this.typingAdd3}></input>
            <br />
            <label>Currency:- </label>
            <input
              type="text"
              name="Currency"
              onChange={this.typingAdd4}
            ></input>
            <button
              type="button"
              class="btn btn-danger"
              onClick={this.clearList}
            >
              ClearList
            </button>
            <button type="button" class="btn btn-primary" onClick={this.add}>
              Add
            </button>
          </form>
        </div>
        <Listitem
          country={this.state.country}
          ID={this.state.id}
          SCORE={this.state.score}
          Currency={this.state.currency}
        />
      </div>
    );
  }
}
