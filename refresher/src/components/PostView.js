import React, { Component } from "react";

export default class PostView extends Component {
  state = {
    id: null
  };
  componentDidMount() {
    // console.log(this.props);
    let id = this.props.match.params.post_id;
    this.setState({
      id
    });
    // console.log(id);
  }
  render() {
    return (
      <div className="container">
        <h4>Router Param {this.state.id}</h4>
      </div>
    );
  }
}
