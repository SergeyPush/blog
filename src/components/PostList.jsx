import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h1>Posts List</h1>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchPosts }
)(PostList);
