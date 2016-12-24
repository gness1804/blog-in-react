import React, {Component} from 'react';

class Header extends Component {

  render() {
    return (
      <div>
        <header>
            <h1>Graham Nessler</h1>
		      <h3>Web developer, scholar, lover of cats and dogs</h3>
          <ul className="mainmenu">
            <a className="link1" href="http://www.grahamnessler.com/" target="_blank">
              <li>Portfolio</li>
            </a>
            <a className="link1" href="https://github.com/gness1804" target="_blank">
              <li>Github</li>
            </a>
            <a className="link1" href="https://www.linkedin.com/in/graham-nessler-b9025756" target="_blank">
              <li>LinkedIn</li>
            </a>
            <a className="link1" href="https://twitter.com/gness1804" target="_blank">
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
