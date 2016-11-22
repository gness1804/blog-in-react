import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Posts from './Posts';

const ReactDOM = require('react-dom');

class Application extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        {this.props.children}
      </div>
    );
  }

}


export default Application;
