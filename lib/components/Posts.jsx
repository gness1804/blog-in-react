import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class Posts extends Component {

  render() {
    console.log(this.props.posts);
    return (
      <div>I am the Posts section.</div>
    );
  }

}


export default Posts;
