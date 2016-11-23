import React, {Component} from 'react';
import EachPost from './EachPost';
import posts from './posts';

const ReactDOM = require('react-dom');

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: posts || [],
    };
  }

  render() {
    let postList;

    const { posts } = this.state;

    if (posts) {
      postList = posts.map(p => <EachPost {...p} />);
    }

    return (
      <div>
        {postList}
      </div>
    );
  }

}


export default PostList;
