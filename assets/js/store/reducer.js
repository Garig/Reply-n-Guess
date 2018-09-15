/*
 * Local import
 */
import {
  DO_SOMETHING,
  RECEIVE_DAILY_QUESTIONS
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
    case RECEIVE_DAILY_QUESTIONS:
      return {
        ...state,
        questions: [...state.questions, ...action.payload]
      };

    default:
      return state;
  }
};

/**
 * ￼Export
 */
export default reducer;
