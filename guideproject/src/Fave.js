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
          {" "}
          Favourite country
          <input type="text" onChange={this.handleChange} />
        </label>
        <button type="submit" onClick={this.handleSubmit}>
          Add{" "}
        </button>
      </div>
    );
  }
}
