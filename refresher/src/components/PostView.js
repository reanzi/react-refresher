import React, { Component } from "react";
import Axios from "axios";

export default class PostView extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    // console.log(this.props);
    let id = this.props.match.params.post_id;
    Axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res => {
      //   const { post } = res.data;
      // console.log(res.data);
      this.setState({
        post: res.data
      });
      console.log(this.state);
    });
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p> {this.state.post.body} </p>
      </div>
    ) : (
      <div className="center">Loading Posts......</div>
    );
    return <div className="container">{post}</div>;
  }
}
