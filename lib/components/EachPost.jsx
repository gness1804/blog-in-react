import React, { Component } from 'react';

class EachPost extends Component {

  render() {

    const { title, date, image, note, body, github, interactiveLink, secondPara, thirdPara } = this.props;

    return (
      <div className="template">
			  <h2>{title}</h2>
			   <p className="date">Posted on {date}</p>
         {github ? <a href={github}><h3>Github</h3></a> : ''}
         {interactiveLink ? <a href={interactiveLink}><h3>Check it Out!</h3></a> : ''}
				 <img src={image} alt="The image for the topic."></img>
                                 { note ? <h4 className="note">{note}</h4> : ''}
				 <p className="body">{body}</p>
         {secondPara ? <p className="second-para">{secondPara}</p> : ''}
         {thirdPara ? <p className="third-para">{thirdPara}</p> : ''}
		</div>
    );
  }

}


export default EachPost;
