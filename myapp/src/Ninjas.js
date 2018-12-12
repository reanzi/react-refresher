import React, { Component } from "react";

class Ninjas extends Component {
  render(props) {
    // no need to pass props into render as it's given in class base components
    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.id}>
          <div>My name: {ninja.name}</div>
          <div>My age: {ninja.age}</div>
          <div>Belt: {ninja.belt} </div>
          <hr />
        </div>
      );
    });
    return <div className="ninja-list">{ninjaList}</div>;
  }
}

export default Ninjas;
