import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';

import Application from './components/Application.jsx';

require('./styles.scss');

render((
  <Router history={hashHistory}>
    <Route path="/" component={Application}>

    </Route>
  </Router>
             ), document.getElementById('application'));
