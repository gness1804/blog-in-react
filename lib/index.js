import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import Application from './components/Application.jsx';
import Header from './components/Header.jsx';
import PostList from './components/PostList';
import AboutMe from './components/AboutMe';
import NotFound from './components/NotFound';

require('./styles.scss');

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Match exactly pattern="/" component={Application} />
        <Match exactly pattern="/" component={PostList} />
        <Match exactly pattern="/aboutme" component={AboutMe} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
}

render(< Root />, document.getElementById('application'))
