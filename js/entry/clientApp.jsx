import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../containers/App';

const renderApp = () => {
  render(
    <BrowserRouter key={Math.random()}>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
};
renderApp();

if (module.hot) {
  module.hot.accept('../containers/App', () => {
    renderApp();
  });
}
