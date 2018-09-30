/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
/*
 * Local import
 */
// Reducer
import reducer from './reducer.js'; // notre reducer custom

// Middlewares
import middleware from './middlewares/middleware'; // notre middleware pour la page d'accueil
import questionsMiddleware from './middlewares/questionsMiddleware'; // notre middleware pour la page d'accueil
import userMiddleware from './middlewares/userMiddleware'; // notre middleware pour la gestion de l'user
import answersMiddleware from './middlewares/answersMiddleware'; // notre middleware pour la gestion des réponses

/*
 * Code
 */
// Extension Redux Dev Tools
const devTools = [];

// On déverse l'extension uniquement si elle existe, ou bien rien n'est déversé.
if (window.devToolsExtension) {
  // eslint-disable-next-line
  devTools.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

// Middleware custom — on n'en a qu'un seul
const Middleware = applyMiddleware(
  questionsMiddleware,
  userMiddleware,
  answersMiddleware,
  middleware,
  thunk
);

// Enhancers : les extensions/outils + les middlewares custom
const enhancers = compose(Middleware, ...devTools);

// createStore configure le store avec le reducer et les "enhancers"
const store = createStore(
  reducer,
  enhancers // mix of middlewares and extensions
);

/*
 * Export
 */
export default store;
