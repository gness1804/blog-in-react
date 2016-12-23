import React, {Component} from 'react';
import { Link } from 'react-router';

class Header extends Component {

  render() {
    return (
      <div>
        <header>
          <Link className="h1-link" to="/">
            <h1>Graham Nessler</h1>
          </Link>
		      <h3>Web developer, scholar, lover of cats and dogs</h3>
		      <ul className="mainmenu">
						<Link to="/" className="link1 current-page">
						  <li>Home</li>
						</Link>
						<Link to="/aboutme" className="link1">
							<li>About Me</li>
						</Link>
						<a className="link1" href="http://www.grahamnessler.com" target="blank">
              <li>Portfolio</li>
						</a>
					</ul>
          <hr />
				</header>
      </div>
    );
  }

}


export default Header;
