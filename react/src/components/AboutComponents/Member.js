import React, { Component } from "react";

export default class Member extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
        <h4 class="">{this.props.name}</h4>
        <p class="">{this.props.description}</p>
        <br></br>
        <br></br>
      </div>
    );
  }
}
