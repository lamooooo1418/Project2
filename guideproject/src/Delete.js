import React from "react";
import axios from "axios";
export default class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 };
  }

  handleChange = e => {
    this.setState({ id: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .delete(
        `https://www.triposo.com/api/20190906/tour.json?annotate=trigram:Amsterdam&trigram=>0.2&account=VHSX48JH&token=60v4hgiq3zyo304rc0p3kfkh19zd224l${this.state.id}`
      )

      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}></form>
        <label>
          {" "}
          Country ID
          <input type="number" name="id" onChange={this.handleChange} />
        </label>
        <button type="submit" onClick={this.handleSubmit}>
          Delete{" "}
        </button>
      </div>
    );
  }
}
