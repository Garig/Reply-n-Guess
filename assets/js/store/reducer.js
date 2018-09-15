/*
 * Npm import
 */
import { applyMiddleware, createStore } from 'redux';
import axios from "axios";
// import thunk from "redux-thunk";

/*
 * Local import
 */


/*
 * Code
 */
/**
 * Initial State
 */
const initialState = {
    hide: true,
    pseudo: 'Anonymous',
    message: [],
  };
  
  /**
   * An action arrives. It must be *transformed* in a state mutation, that is,
   * the reducer *must* return an edited copy of the current state.
   */
  const reducer = (state = initialState, action = {}) => {

// On déverse l'extension uniquement si elle existe, ou bien rien n'est déversé.
if (window.devToolsExtension) {
  // eslint-disable-next-line
  devTools.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

// Middlewares custom — on n'en a qu'un seul
const middleware = applyMiddleware(middleware);

// Enhancers : les extensions/outils + les middlewares custom
const enhancers = compose(middleware, ...devTools);

// createStore configure le store avec le reducer et les "enhancers"
const store = createStore(
  reducer,
  enhancers, // mix of middlewares and extensions
);

/*
 * Export
 */
export default store;