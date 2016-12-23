import React, {Component} from 'react';
import { Link } from 'react-router';

class AboutMe extends Component {

  render() {
    return (
      <div className="master-container">
        <div className="empty-space"></div>
        <div className="template">
			    <h2>About Me</h2>
			    <img src="./headshot.jpg" alt="Headshot."></img>
			    <p>I am originally from Bryan/College Station, Texas, and am currently located in Denver. In my first life, I was a <a href="https://sites.google.com/site/grahamnessler1/home" target="blank">scholar of Caribbean and Latin American history</a>, and I am now training to become a web developer. You can find out more in <a href="http://www.grahamnessler.com" target="blank">my portfolio</a>. Go Blue!</p>
		    </div>
        <Link className="back-home-button-link" to="/">
          <button className="back-home-button">Back Home</button>
        </Link>
    </div>
    );
  }

}


export default AboutMe;
