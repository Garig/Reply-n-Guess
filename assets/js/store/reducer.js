/*
 * Local import
 */
import {
  DO_SOMETHING,
  RECEIVE_DAILY_QUESTIONS,
  SET_INPUT,
  SET_DATE
} from './actions';

/**
 * Initial State
 */
const initialState = {
  answers: [],
  questions: [],
  results: [],
  user: {
    username: '',
    password: '',
    email: '',
    birthDate: ''
  }
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
    case SET_INPUT:
      console.log(action.payload.inputName, action.payload.value);
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.inputName]: action.payload.value
        }
      };
    case SET_DATE:
      return {
        ...state,
        user: {
          ...state.user,
          birthDate: action.payload
        }
      };
    default:
      return state;
  }
};

/**
 * ￼Export
 */
export default reducer;
