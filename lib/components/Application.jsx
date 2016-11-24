import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import Header from './Header';
import Sidebar from './Sidebar';
import Search from './Search';

const ReactDOM = require('react-dom');

class Application extends Component {

  searchPage(value) {
    window.find(value);
  }

  render() {
    return (
      <div>
        <Header />
        <Search searchPage={this.searchPage} />
        <section className="master-container">
          {this.props.children}
        </section>
      </div>
    );
  }

}


export default Application;
