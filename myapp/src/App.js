import React, { Component } from "react";
import Ninjas from "./Ninjas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React App!</h1>
        <p>Welcome :)</p>
        <Ninjas name="Reanzi" age="28" belt="Yellow" />
      </div>
    );
  }
}

export default App;
