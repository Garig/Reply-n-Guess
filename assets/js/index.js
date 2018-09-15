/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

/**
 * NPM import
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Local import
 */
// Components
import App from './containers/App';

// Store
import store from './store';

// Action

/**
 * Code
 */
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootComponent, document.getElementById('root'));

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// var $ = require('jquery');
