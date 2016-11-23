import React, {Component} from 'react';
const ReactDOM = require('react-dom');

const $ = require('jquery');

class EachPost extends Component {

  render() {

    const { title, date, image, note, body } = this.props;

    return (
      <div className="template">
			  <h2>{title}</h2>
			   <p className="date">{date}</p>
				 <img src={image} alt="The image for the topic."></img>
				 <h4>{note}</h4>
				 <p>
					{body}
				 </p><br></br>
		</div>
    );
  }

}


export default EachPost;
