import React from "react";
import Listitem from "./listitem";

export default class ListContianer extends React.Component {
  render() {
    console.log("this.props.results", this.props.trips);
    let newContry = null;

    if (this.props.trips !== undefined) {
      newContry = this.props.trips.map((element, index) => {
        return (
          <div key={index}>
            <Listitem
              country={element}
              adding={this.props.add}
              addToFav={this.props.addToFav}
            />
          </div>
        );
      });
    }

    return (
      <div>
        {newContry}
        {/* <table> {this.props.input.join(" - ")} </table> */}

        <table border="1">
          <tr>
            <td> Name: </td>
            <td>{this.props.input[0]}</td>
          </tr>
          <tr>
            <td>ID </td>
            <td>{this.props.input[1]}</td>
          </tr>
          <tr>
            <td>Score </td>
            <td> {this.props.input[2]}</td>
          </tr>{" "}
          <tr>
            <td>Currency</td>
            <td> {this.props.input[3]}</td>
          </tr>
        </table>
      </div>
    );
  }
}
