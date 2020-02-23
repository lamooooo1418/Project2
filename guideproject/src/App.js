import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from './Bar.js';
import Home from './Home';
import Fave from './Fave';
import Footer from './Footer';
import DB from './DB';
import City from './City1';
export default class App extends React.Component {

constructor(props){
super (props)
}
render(){
let city = this.props.name.map(function(city,index) {
return (<City city={city} key={index} />);});
//.........................................................................
let Bar= this.props.name.map(function(bar,index) {
return (<Bar Bar={bar} key={index} />);});
//............................................................................
let footer= this.props.name.map(function(Footer,index) {
return (<Footer footer={footer} key={index} />)
});
return (<div>
<nav className="Nav"> Home | Tourist Point</nav>
{city}
 {footer}
<div className="who">Who We are ?  Tourist Guide is a website can show you </div>
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




