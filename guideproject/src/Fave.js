import React from 'react'
import axios from "axios";
export default class Fave extends React.Component {
    constructor(props) {
        super(props)
        this.state = { faves:'',}
    }

  

handleChange =(e)=>{this.setState({faves:e.target.value})}


handleSubmit = (e) => {
e.preventDefault()
const Userinput={faves:this.state.faves}
axios.post(`https://www.triposo.com/api/20190906/tour.json?annotate=trigram:Amsterdam&trigram=>0.2&account=VHSX48JH&token=60v4hgiq3zyo304rc0p3kfkh19zd224l`,{Userinput})

.then(response => {
          console.log(response.data);
    
  
    
        }).catch(err => {
          console.log('ERROR: ', err);
          });
    
      }













render(){
return (<div>

<form onSubmit={this.handleSubmit}></form>
<label> Favourite country
<input type="text"  onChange={this.handleChange} />  

</label>
<button type="submit"  onClick= {this.handleSubmit}    >Add </button>
</div>)


}


}