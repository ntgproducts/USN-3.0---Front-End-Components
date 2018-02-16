import React from 'react';
import { Route } from 'react-router-dom';
import Nav from '../components/navigation';
// import type { Match } from 'react-router-dom';

const App = () => (

  <div className="app">
    <Route exact path="/"
      component={Nav} />
  </div>

);


export default App;