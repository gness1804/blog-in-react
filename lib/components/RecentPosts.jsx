import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class RecentPosts extends Component {

  showMostRecentPosts(post) {
    return(
      <div>{post.title}</div>
    );
  }

  render() {

    return (
      <div>
        <ul>
          <li>{this.props.posts.map(this.showMostRecentPosts)}</li>
        </ul>
      </div>
    );
  }

}


export default RecentPosts;
