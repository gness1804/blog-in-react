import React, {Component} from 'react';
import { Link } from 'react-router';

import RecentPosts from './RecentPosts';

const ReactDOM = require('react-dom');

class Sidebar extends Component {

  showOnlyOnePost(id) {
    this.props.showOnlyOnePost(id);
  }

  render() {
    return (
      <div>
        <aside className="link-section">
          <Link to="/aboutme">
            <img id="me" src="./headshot.jpg" alt="Headshot of me."></img>
          </Link>
			    <RecentPosts posts={this.props.posts} showOnlyOnePost={this.showOnlyOnePost.bind(this)}/>
		    </aside>
      </div>
    );
  }

}


export default Sidebar;
