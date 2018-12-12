import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Raymond", age: 28, belt: "Black", id: 1 },
      { name: "Joyce", age: 25, belt: "Yellow", id: 2 },
      { name: "Rahel", age: 2, belt: "White", id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>My React App!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
