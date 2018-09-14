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
import App from './Components/App';

/**
 * Local import
 */
// Components
import App from './Components/App';

// Store
// import store from 'src/store';

// Action
// import { websocketConnect } from 'src/store/actions';

/**
 * Code
 */
const rootComponent = (
  <App />
);

render(rootComponent, document.getElementById('root'));

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// var $ = require('jquery');

console.log('Hello Webpack Encore !');
