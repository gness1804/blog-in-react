import React, { Component } from 'react';
const ReactDOM = require('react-dom');

class RecentPosts extends Component {

  showMostRecentPosts(post) {
    const id = post.id;
    const title = post.title;
    return(
      <div className="recent-posts-each-post" onClick={() => {this.showOnlyOnePost({id})} }>{title}</div>
    );
  }

  showOnlyOnePost(id) {
    this.props.showOnlyOnePost(id);
  }

  render() {

    const onlyFivePosts = this.props.posts.slice(0, 5);

    return (
      <div>
        <h2>Recent Posts</h2>
        <div className="recent-posts-container">{onlyFivePosts.map(this.showMostRecentPosts.bind(this))}</div>
      </div>
    );
  }

}


export default RecentPosts;
