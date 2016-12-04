const $ = require('jquery');

const scroll = () => {
  $('.sidebar').scroll(() => {
    console.log('foo');
  });
};

export default scroll;
