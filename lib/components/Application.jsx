import React, { Component } from 'react';
import Header from './Header';

class Application extends Component {

  render() {
    return (
      <div>
        <Header />
        <section className="master-container">
          {this.props.children}
        </section>
      </div>
    );
  }

}


export default Application;
