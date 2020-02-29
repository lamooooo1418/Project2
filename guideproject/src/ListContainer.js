import React from "react";
import Listitem from "./listitem";
import DB from "./DB";
export default class ListContianer extends React.Component {
  render() {
    console.log("this.props.results", this.props.trips);
    let newContry = null;

    if (DB.results !== undefined) {
      newContry = DB.results.map((element, index) => {
        return (
          <div key={index}>
            <Listitem
              obj={element}
              adding={this.props.add}
              addToFav={this.props.addToFav}
            />
          </div>
        );
      });
    }

    return <div>{newContry}}</div>;
  }
}
