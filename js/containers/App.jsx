import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import MainAppLanding from '../pages/Main';
import Calculators from '../components/Calculators';
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

// TODO: Needs Proptypes to continue dev on the router
// TODO: Move the ideas from the React Course from FEM 
// Make sure that the 404 NoMatch Component comes last
// Switch makes it so that there is only one route running at a time
const App = () => (
  <div className="app">
    <Nav />
    <Switch>
      <Route exact path="/" component={MainAppLanding} />
      <Route exact path="/calculator" component={Calculators} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;