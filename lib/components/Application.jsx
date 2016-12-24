import React, { Component } from 'react';
import Header from './Header';
import PostList from "./PostList";

class Application extends Component {

  render() {
    return (
      <div id="top">
        <Header />
        <PostList />
      </div>
    );
  }

}


export default Application;
