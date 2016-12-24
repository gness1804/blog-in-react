import React from 'react';
import { render } from 'react-dom';

import Application from './components/Application.jsx';
import Header from './components/Header.jsx';
import PostList from './components/PostList';

require('./styles.scss');

const Root = () => {
  return (
    <div>
      <Application />
    </div>
  );
}

render(< Root />, document.getElementById('application'))
