import React from 'react';
import { Route } from 'react-router-dom';
import Nav from '../components/navigation';
// import type { Match } from 'react-router-dom';

const NoMatch = ({ location }) => (
  <div>
    <h1>404: Page not found</h1>
    <code>
    NOMATCH FOUND FOR {location.pathname}
    </code>
  </div>
);

const App = () => (

  <div className="app">
    <Route exact path="/" component={Nav} />
    <Route component={NoMatch} />
  </div>

);

export default App;