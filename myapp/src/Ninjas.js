import React, { Component } from "react";

class Ninjas extends Component {
  render() {
    // no need to pass props into render as it's given in class base components
    const { name, age, belt } = this.props;
    return (
      <div className="ninja">
        <div>My name: {name}</div>
        <div>My age: {age}</div>
        <div>Belt: {belt} </div>
      </div>
    );
  }
}

export default Ninjas;
