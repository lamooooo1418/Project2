import React from "react";

export default class listitem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <li>
          Name:{this.props.country.name} ID:{this.props.country.id}
          Currency :{this.props.country.currency} Score:
          {this.props.country.score}
        </li>
      </div>
    );
  }
}
