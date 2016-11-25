import React, {Component} from 'react';

class AboutMe extends Component {

  render() {
    return (
      <div>
        <div className="empty-space"></div>
        <div className="template">
			    <h2>About Me</h2>
			    <img src="./headshot.jpg" alt="Headshot."></img>
			    <p>I am originally from Bryan/College Station, Texas, and am currently located in Denver. In my first life, I was a <a href="https://sites.google.com/site/grahamnessler1/home" target="blank">scholar of Caribbean and Latin American history</a>, and I am now training to become a web developer. You can find out more in <a href="http://www.grahamnessler.com" target="blank">my portfolio</a>. Go Blue!</p>
		    </div>
    </div>
    );
  }

}


export default AboutMe;
