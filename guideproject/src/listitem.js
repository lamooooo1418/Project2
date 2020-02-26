import React from "react";

export default class listitem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <table border="1">
          <tr>
            <td> Name: </td>
            <td>{this.props.country.name}</td>
          </tr>
          <tr>
            <td>ID </td>
            <td>{this.props.country.id}</td>
          </tr>
          <tr>
            <td>Score </td>
            <td> {this.props.country.score} </td>
          </tr>{" "}
          <tr>
            <td>Currency</td>
            <td> {this.props.country.currency} </td>
          </tr>
        </table>
      </div>
    );
  }
}
