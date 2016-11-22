import React, {Component} from 'react';
import { Link } from 'react-router';

const ReactDOM = require('react-dom');

class Sidebar extends Component {

  render() {
    return (
      <div>
        <aside className="link-section">
          <Link to="/aboutme">
            <img id="me" src="../../images/headshot.jpg" alt="Headshot of me."></img>
          </Link>

			       <iframe src="recent.html" id="recFrame"></iframe>
		    </aside>
      </div>
    );
  }

}


export default Sidebar;
