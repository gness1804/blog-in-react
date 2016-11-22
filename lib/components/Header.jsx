import React, {Component} from 'react';
import { Link } from 'react-router';

const ReactDOM = require('react-dom');

class Header extends Component {

  render() {
    return (
      <div>
        <header>
		    	<h1>Graham Nessler</h1>
		      <h3>Aspiring developer, scholar, lover of cats and dogs.</h3>
		      <ul className="mainmenu">
						<Link to="/" className="link1 current-page">
						  <li>Home</li>
						</Link>
						<Link to="/aboutme" className="link1">
							<li>About Me</li>
						</Link>
						<a className="link1" href="http://www.grahamnessler.com"><li>Portfolio</li></a>
					</ul>
				</header>
      </div>
    );
  }

}


export default Header;
