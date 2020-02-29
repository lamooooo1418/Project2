import React from "react";

export default class listitem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <table border="3">
          <tr>
            <td className="listtd"> ID: </td>
            <td>{this.props.country}</td>
          </tr>

          <tr>
            <td>Name: </td>
            <td>{this.props.ID}</td>
          </tr>
          <tr>
            <td>Currency:</td>
            <td> {this.props.SCORE}</td>
          </tr>
          {}
          <tr>
            <td>Score:</td>
            <td> {this.props.Currency}</td>
          </tr>
        </table>
        <p> </p>
        <p> </p>
        <button type="button" class="btn btn-default btn-sm">
          <span
            onClick={this.props.DeleteOneitem}
            class="glyphicon glyphicon-trash"
          ></span>{" "}
          Trash
        </button>
        <button
          onClick={this.props.Edit}
          type="button"
          class="btn btn-default btn-sm"
        >
          <span class="glyphicon glyphicon-pencil"></span> Edit
        </button>
      </div>
    );
  }
}
