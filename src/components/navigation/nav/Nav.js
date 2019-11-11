import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import someArticle from '../../pages/someArticle/SomeArticle';

const LoadableComponent = Loadable({
  loader: () =>
    import('../../pages/About/About' /* webpackChunkName: "About" */),
  loading: <h2>loading ......</h2>,
});

const News = lazy(() =>
  import('../../News/News' /* webpackChunkName: "News" */),
);
// const About = lazy(() =>
//   import('../../pages/About/About' /* webpackChunkName: "About" */),
// );
const Home = lazy(() =>
  import('../../pages/Home/Home' /* webpackChunkName: "Home" */),
);

const Nav = () => (
  <Suspense fallback={<div>Загрузка...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={LoadableComponent} />
      <Route path="/newss/:someArticle" component={someArticle} />
      <Route path="/newss" component={News} />
      <Route component={ErrorPage} />
    </Switch>
  </Suspense>
);

export default Nav;
