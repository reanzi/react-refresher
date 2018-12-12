import React, { Component } from "react";

export default class AddNinja extends Component {
  state = {
    name: "",
    age: "",
    belt: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    // console.log(e.target.value);
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" onChange={this.handleChange} id="name" />
          <label htmlFor="age">Age</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="belt">Belt</label>
          <input type="text" id="belt" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
