import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';

import Application from './components/Application.jsx';
import Posts from './components/Posts';
import AboutMe from './components/AboutMe';

require('./styles.scss');

render((
  <Router history={hashHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={Posts} />
      <Route path="/aboutme" component={AboutMe} />
    </Route>
  </Router>), document.getElementById('application'));
