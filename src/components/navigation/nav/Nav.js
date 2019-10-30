import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../../pages/About/About';
import Home from '../../pages/Home/Home';
import News from '../../News/News';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import someArticle from '../../pages/someArticle/SomeArticle';

const Nav = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/news/:someArticle" component={someArticle} />
    <Route path="/news" component={News} />
    <Route component={ErrorPage} />
  </Switch>
);

export default Nav;
