// @flow
import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import AsyncRoute from '../utils/AsyncRoute';
import store from '../store';

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
      <Route exact path="/"
        component={ props => 
        <AsyncRoute props={props} loadingPromise={ import('../pages/Main') } />} />
      <Route exact path="/calculators" component={ props => 
        <AsyncRoute props={props} loadingPromise={ import('../components/Calculators') } /> } />
    </div>
  </Provider>
);

export default App;