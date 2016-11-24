import React, { Component } from 'react';

class EachPost extends Component {

  showOnlyOnePost(id) {
    this.props.showOnlyOnePost(id);
  }

  render() {

    let topLinks;

    const { title, date, image, note, body, github, interactiveLink, secondPara, thirdPara, id } = this.props;

    if (github || interactiveLink) {
      topLinks = <div className="links-container-top">
        {github ? <a href={github}><h3 className="github">Github</h3></a> : ''}
        {interactiveLink ? <a href={interactiveLink}><h3 className="check-it-out">Check it Out!</h3></a> : ''}
      </div>;
    }


    return (
      <div className="template truncated">
			  <h2 className="each-post-headline" onClick={() => {this.showOnlyOnePost({id})} }>{title}</h2>
			   <p className="date">Posted on {date}</p>
         {topLinks}
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
