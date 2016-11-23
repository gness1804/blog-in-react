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
    let fivePosts;

    const { allPosts } = this.state;

    if (allPosts) {
      fivePosts = allPosts.slice(0, 5);
    }

    if (allPosts) {
      postList = fivePosts.map(p => <EachPost {...p} />);
    }

    return (
      <div>
        {postList}
      </div>
    );
  }

}


export default PostList;
