import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import Header from './Header';
import Sidebar from './Sidebar';
import Search from './Search';

// import posts from './posts';

const ReactDOM = require('react-dom');

class Application extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     posts: posts || [],
  //   };
  // }

  searchPage(value) {
    window.find(value);
  }

  render() {
    return (
      <div>
        <Header />
        <Search searchPage={this.searchPage} />
        <section className="master-container">
          <Sidebar />
          {this.props.children}
        </section>
      </div>
    );
  }

}


export default Application;
