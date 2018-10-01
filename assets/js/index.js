/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

/**
 * Package import
 */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

/**
 * Local import
 */
// Components
import App from './Components/App';
import {loggedIn} from './store/actions/userActions';
// Actions spécifiques aux questions
import { loadProposedQuestions } from './store/actions/questionsActions';

// Store
import store from './store';

store.dispatch(loggedIn());

/**
 * Code
 */
// Composant principal
const rootComponent = (
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
);

// Point d'entrée
const targetNode = document.getElementById('root');

// Rendu
render(rootComponent, targetNode);

store.dispatch(loadProposedQuestions());
