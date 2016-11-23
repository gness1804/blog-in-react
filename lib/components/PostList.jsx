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

  showOnlyOnePost(id) {
    const thisPost = id.id;
    const onePost = this.state.allPosts.filter((post) => {
      return post.id === thisPost;
     });
    this.setState({ allPosts: onePost });
  }

  toggleShowAllPosts() {
    this.setState({ allPosts: posts });
    this.setState({ showAllPosts: !this.state.showAllPosts });
  }

  render() {
    let postList;
    let fivePostsOrAll;

    const { allPosts, showAllPosts } = this.state;

    const sortedList = allPosts.sort((a, b) => { a.id > b.id });

    if (allPosts) {
      if (!this.state.showAllPosts) {
        fivePostsOrAll = sortedList.slice(0, 5);
      }
      else {
        fivePostsOrAll = sortedList;
      }
    }

    if (allPosts) {
      postList = fivePostsOrAll.map(p => <EachPost {...p} showOnlyOnePost={this.showOnlyOnePost.bind(this)}/>);
    }

    return (
      <div>
        {postList}
        <button className="show-all-posts-button" onClick={() => { this.toggleShowAllPosts() }}>{showAllPosts ? 'Hide Older Posts' : 'Show All Posts'}</button>
      </div>
    );
  }

}


export default PostList;
