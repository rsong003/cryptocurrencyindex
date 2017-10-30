// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import promise from 'redux-promise';
// import App from './src/Containers/App';
// import rootReducer from './src/reducers/reducers_combined.js';


// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// render(
//   <Provider store={createStoreWithMiddleware(rootReducer)}>
//     <App />
//   </Provider> , document.getElementById('app')
// )
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
