import React, {Component} from 'react';
import { Link } from 'react-router';

import RecentPosts from './RecentPosts';

const ReactDOM = require('react-dom');

class Sidebar extends Component {

  render() {
    return (
      <div>
        <aside className="link-section">
          <Link to="/aboutme">
            <img id="me" src="../../images/headshot.jpg" alt="Headshot of me."></img>
          </Link>
			    <RecentPosts />
		    </aside>
      </div>
    );
  }

}


export default Sidebar;
