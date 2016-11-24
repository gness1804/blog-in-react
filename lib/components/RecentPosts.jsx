import React, { Component } from 'react';
const ReactDOM = require('react-dom');

class RecentPosts extends Component {

  showMostRecentPosts(post) {
    const id = post.id;
    const title = post.title;
    return(
      <div onClick={() => {this.showOnlyOnePost({id})} }>{title}</div>
    );
  }

  showOnlyOnePost(id) {
    this.props.showOnlyOnePost(id);
  }

  render() {

    const onlyFivePosts = this.props.posts.slice(0, 5);

    return (
      <div>
        <ul>
          <li>{onlyFivePosts.map(this.showMostRecentPosts.bind(this))}</li>
        </ul>
      </div>
    );
  }

}


export default RecentPosts;
