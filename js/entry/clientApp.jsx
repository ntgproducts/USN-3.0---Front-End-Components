import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../containers/App';


const renderApp = () => {
  hydrate(
    <BrowserRouter key={Math.random()}>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

// Render the main app with router
renderApp();

if (module.hot) {
  module.hot.accept('../containers/App', () => {
    renderApp();
  });
}
