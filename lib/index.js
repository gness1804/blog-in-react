import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';

import Application from './components/Application.jsx';
import PostList from './components/PostList';
import AboutMe from './components/AboutMe';
import Sidebar from "./components/Sidebar";

require('./styles.scss');

render((
  <Router history={hashHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={PostList} />
      <Route path="/aboutme" component={AboutMe} />
    </Route>
    <Route path="/" component={Sidebar} />
  </Router>), document.getElementById('application'));
