// @flow
import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import AsyncRoute from '../utils/AsyncRoute';
import store from '../store';
import Nav from '../components/Navigation';

const NoMatch = ({ location }) => (
  <div>
    <h1>404: Page not found</h1>
    <code>
    NOMATCH FOUND FOR {location.pathname}
    </code>
  </div>
);

NoMatch.propTypes = {
  location: PropTypes.string
};
NoMatch.defaultProps = {
  location: 'unknown'
}

// We are importing the component in the loadingPromise Prop so we dynamically load the component

const App = () => (
  <Provider store={store}>
      <div className="app">
        <Nav isSticky={false} navStyle="default" isMobile={false} />
        <Route exact path="/"
          component={props =>
            <AsyncRoute props={props} loadingPromise={import('../pages/Main')} />} />
        <Route exact path="/calculators" component={props =>
          <AsyncRoute props={props} loadingPromise={import('../components/Calculators')} />} />
        <Route exact path="/catalog" component={props =>
          <AsyncRoute props={props} loadingPromise={import('./Catalog')} />} />
        <Route exact path="/search" component={props =>
          <AsyncRoute props={props} loadingPromise={import('./Search')} />} />
        <Route exact path="/category-boxes" component={props =>
          <AsyncRoute props={props} loadingPromise={import('./Category')} />} />
      </div>
  </Provider>
);

export default App;