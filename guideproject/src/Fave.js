import React from "react";
import axios from "axios";
export default class Fave extends React.Component {
  constructor(props) {
    super(props);
    this.state = { faves: "" };
  }

  render() {
    return (
      <div>
        <label>
          {""}
          Favourite country :
          <input type="text" onChange={this.props.handleChange} />
          <button type="button" class="btn btn-warning" onClick={this.addToFav}>
            AddToFavourite
          </button>
        </label>

        <h1>{this.props.Fave}</h1>
      </div>
    );
  }
}
