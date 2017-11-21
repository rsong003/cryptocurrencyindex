import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/containers/App.js';
import configureStore from './src/store/configureStore';

const cacheStore = window.localStorage.getItem('store') || {};
const store = configureStore(cacheStore);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
