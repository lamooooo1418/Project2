import React from 'react' ;
import TouristPoint from './TouristPoint ';
import Fave from './Fave';
import Home from './Home';
export default class Bar extends React.Component{
constructor(props){
super(props)
this.state={}}

render (){
const AllCountry = this.props.name.map(function(country, index) {
return <TouristPoint name={country} key={index} />;})
 const Fave= this.props.name.map(function(fave, index) {
return <Fave name={fave} key={index} />;})
return {Fave}
 
 
 }}