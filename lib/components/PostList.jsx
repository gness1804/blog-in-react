import React, { Component } from 'react';
import { includes } from 'lodash';

import EachPost from './EachPost';
import posts from './posts.js';
import Search from './Search';

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: posts || [],
      showAllPosts: false,
      searchString: '',
    };
  }

  recordSearchString(value) {
    this.setState({ searchString: value });
  }

  searchPage() {
    if (this.state.searchString) {
      const target = this.state.searchString;
      const result = this.state.allPosts.filter((post) => {
        return includes(post, target);
      });
      if (result.length > 0) {
        this.setState({ allPosts: result });
      } else {
        alert('Sorry, your search did not match any results.');
      }
    }
  }

  showAllPosts() {
    this.setState({ allPosts: posts });
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

    const sortedList = allPosts.sort((a, b) => {return b.id - a.id});

    if (allPosts) {
      if (!this.state.showAllPosts) {
        fivePostsOrAll = sortedList.slice(0, 5);
      }
      else {
        fivePostsOrAll = sortedList;
      }
    }

    if (allPosts) {
      postList = fivePostsOrAll.map(p => <EachPost {...p} showOnlyOnePost={this.showOnlyOnePost.bind(this)} key={p.id} />);
    }

    return (
      <div className="master-container">
        <Search showAllPosts={this.showAllPosts.bind(this)} handleClick={() => { this.searchPage() }} recordSearchString={this.recordSearchString.bind(this)} />
        {postList}
        <button className="show-all-posts-button" onClick={() => { this.toggleShowAllPosts() }}>{showAllPosts ? 'Hide Older Posts' : 'Show All Posts'}</button>
        <a href="#top" className="top-of-page-button-link">
          <button className="top-of-page-button">Top of Page</button>
        </a>
      </div>
    );
  }

}


export default PostList;
