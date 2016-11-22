import React, {Component} from 'react';
const ReactDOM = require('react-dom');

class EachPost extends Component {


  render() {

    const { title, date, image, creditLine, body } = this.props;

    return (
      <div className="template">
			  <h2>{title}</h2>
			   <p className="date">{date}</p>
				 <img src={image} alt="The image for the topic."></img>
				 <h4>Image courtesy of {creditLine}</h4>
				 <p>
					 {body}
				 </p><br></br>
		</div>
    );
  }

}


export default EachPost;
