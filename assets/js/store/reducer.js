/*
 * Local import
 */
import {
  DO_SOMETHING
} from './actions';

/**
 * Initial State
 */
const initialState = {
  answers: [],
  questions: [],
  results: [],
  user: []
};

/**
 * An action arrives. It must be *transformed* in a state mutation, that is,
 * the reducer *must* return an edited copy of the current state.
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      console.log('DO_SOMETHING');
      return {
        ...state
      };

    default:
      return state;
  }
};

/**
 * ￼Export
 */
export default reducer;
