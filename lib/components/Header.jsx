import React, {Component} from 'react';

class Header extends Component {

  render() {
    return (
      <div>
        <header>
            <h1>Graham Nessler</h1>
		      <h3>Web developer, scholar, lover of cats and dogs</h3>
          <ul className="mainmenu">
            <a className="link1" href="http://www.grahamnessler.com/" target="_blank" rel="noopener noreferrer">
              <li>Portfolio</li>
            </a>
            <a className="link1" href="https://github.com/gness1804" target="_blank" rel="noopener noreferrer">
              <li>Github</li>
            </a>
            <a className="link1" href="https://www.linkedin.com/in/graham-nessler-b9025756" target="_blank" rel="noopener noreferrer">
              <li>LinkedIn</li>
            </a>
            <a className="link1" href="https://twitter.com/gness1804" target="_blank" rel="noopener noreferrer">
              <li>Twitter</li>
            </a>
          </ul>
          <hr />
				</header>
      </div>
    );
  }

}


export default Header;
