import React, {Component} from 'react';
import EachPost from './EachPost';
import posts from './posts.js';

const ReactDOM = require('react-dom');

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: posts || [],
      showAllPosts: false,
    };
  }

  toggleShowAllPosts() {
    this.setState({ showAllPosts: !this.state.showAllPosts });
  }

  render() {
    let postList;
    let fivePostsOrAll;

    const { allPosts } = this.state;

    if (allPosts) {
      if (!this.state.showAllPosts) {
        fivePostsOrAll = allPosts.slice(0, 5);
      }
      else {
        fivePostsOrAll = allPosts;
      }
    }

    if (allPosts) {
      postList = fivePostsOrAll.map(p => <EachPost {...p} />);
    }

    return (
      <div>
        {postList}
        <button onClick={() => { this.toggleShowAllPosts() }}>Show All Posts</button>
      </div>
    );
  }

}


export default PostList;
