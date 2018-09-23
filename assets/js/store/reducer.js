/*
 * Local import
 */
import {
  RECEIVE_DAILY_QUESTIONS
} from './actions/questionsActions';

import {
  DISPLAY_ALERT,
  SET_INPUT,
  MAKE_REDIRECT
} from './actions/actions';

import {
  SET_GENDER,
  SET_DATE,
  UPDATE_CONNECTION,
  DISCONNECT,
  SET_USER_INFOS
} from './actions/userActions';

/**
 * Initial State
 */
const initialState = {
  answers: {
    'userChoice': null,
    'userPredict': null,
    'users': '',
    'questions': ''
  },
  questions: [],
  results: [],
  user: {
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
    gender: '',
    birthDate: ''
  },
  userInterface: {
    isConnected: false,
    redirection: '',
    alert: {
      display: false,
      type: '',
      message: ''
    }
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
        questions: [...action.payload]
      };
    case SET_INPUT:
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
    case SET_GENDER:
      return {
        ...state,
        user: {
          ...state.user,
          gender: action.payload
        }
      };
    case DISPLAY_ALERT:
      return {
        ...state,
        userInterface: {
          ...state.userInterface,
          alert: {
            display: true,
            type: action.payload.type,
            message: action.payload.message
          }
        }
      };
    case SET_USER_INFOS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      };
    case UPDATE_CONNECTION:
      return {
        ...state,
        userInterface: {
          ...state.userInterface,
          isConnected: action.payload
        }
      };
    case MAKE_REDIRECT:
      return {
        ...state,
        user: {
          ...state.user,
          password: '',
          passwordConfirm: ''
        },
        userInterface: {
          ...state.userInterface,
          redirection: action.payload,
          alert: {
            display: false,
            type: '',
            message: ''
          }
        }
      };
    case DISCONNECT:
      return {
        ...initialState,
        questions: state.questions
      };
    default:
      return state;
  }
};

/**
 * ￼Export
 */
export default reducer;
