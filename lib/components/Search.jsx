import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class Search extends Component {

  clearInput() {
    document.getElementById('searchbox1').value = '';
  }

  recordInput(e) {
    this.props.recordSearchString(e.target.value);
  }

  render() {
    return (
      <div id="search">
		    <input type="text" placeholder="Search this Page" id="searchbox1" onChange={(e) => { this.recordInput(e); }} /> &nbsp;
		    <input type="submit" onClick={this.props.handleClick} />
		    <input type="submit" onClick={() => { this.clearInput() }} value="Clear" />
	   </div>
    );
  }

}


export default Search;
