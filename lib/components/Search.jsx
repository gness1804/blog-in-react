import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searched: '',
    };
  }

  recordInput(e) {
    this.setState({ searched: e.target.value });
  }

  searchPage() {
    this.props.searchPage(this.state.searched);
  }

  render() {
    return (
      <div id="search">
		    <input type="text" placeholder="Search this Page" id="searchbox1" onChange={(e) => { this.recordInput(e); }} /> &nbsp;
		    <input type="submit" onClick={() => { this.searchPage() }} />
		    <input type="submit" onClick={this.props.clearInput} value="Clear" />
	   </div>
    );
  }

}


export default Search;
