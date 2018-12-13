import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    content: ""
  };
  handleChange = e => {
    let newTodo = e.target.value;
    this.setState({
      content: newTodo
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Todo:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}
