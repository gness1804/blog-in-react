import React, {Component} from 'react';
import EachPost from './EachPost';
import posts from './posts.js';

const ReactDOM = require('react-dom');

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: posts || [],
    };
  }

  render() {
    let postList;

    const { allPosts } = this.state;

    if (allPosts) {
      postList = allPosts.map(p => <EachPost {...p} />);
    }

    return (
      <div>
        {postList}
      </div>
    );
  }

}


export default PostList;
