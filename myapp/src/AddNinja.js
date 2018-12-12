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
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNinja(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={this.handleChange}
            id="name"
            autoComplete="off"
          />
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <label htmlFor="belt">Belt</label>
          <input
            type="text"
            id="belt"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
