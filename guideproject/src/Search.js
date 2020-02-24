import React from 'react';
export default class Search extends React.Component {
constructor(props){
super(props)
}





render() {
return (
    <div>
    <label>Search: </label>
    <input type="text"
  value={this.props.value}
   onChange={this.props.onChange} />
          </div>
        );
      }
    }


