import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';
import { BrowserRouter, Match, Miss }  from "react-router";

import Application from './components/Application.jsx';
import Header from './components/Header.jsx';
import PostList from './components/PostList';
import AboutMe from './components/AboutMe';
import Sidebar from "./components/Sidebar";

require('./styles.scss');

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Header />
        <Match exactly pattern="/" component={Application} />
      </div>
    </BrowserRouter>
  );
}

render(< Root />, document.getElementById('application'))
