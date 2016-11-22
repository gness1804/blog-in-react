import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Posts from './Posts';
import Search from './Search';

const ReactDOM = require('react-dom');

class Application extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

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
