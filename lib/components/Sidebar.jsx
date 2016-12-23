import React, { Component } from 'react';
import { Link } from 'react-router';

class Sidebar extends Component {

  // showOnlyOnePost(id) {
  //   this.props.showOnlyOnePost(id);
  // }

  render() {
    return (
      <div className="sidebar">
        <aside className="link-section">
          <Link to="/aboutme">
            <img id="me" src="./headshot.jpg" alt="Headshot of me."></img>
          </Link>
		    </aside>
      </div>
    );
  }

}


export default Sidebar;
