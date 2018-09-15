/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/*
 * Local import
 */
// Reducer
import reducer from './reducer.js'; // notre reducer custom

// Middlewares
import questionsMiddleware from './middlewares/questionsMiddleware'; // notre middleware custom

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

// Middlewares custom — on n'en a qu'un seul
const myquestionsMiddleware = applyMiddleware(questionsMiddleware);

// Enhancers : les extensions/outils + les middlewares custom
const enhancers = compose(myquestionsMiddleware, ...devTools);

// createStore configure le store avec le reducer et les "enhancers"
const store = createStore(
  reducer,
  enhancers // mix of middlewares and extensions
);

/*
 * Export
 */
export default store;
