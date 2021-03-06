/*
 * Local import
 */
import {
  SET_INPUT_PROPOSED_QUESTIONS,
  RECEIVE_DAILY_QUESTIONS,
  RECEIVE_PROPOSED_QUESTIONS,
  PROPOSED_QUESTIONS_DONE
} from './actions/questionsActions';

import {
  SET_ANSWER,
  SET_ANSWERED,
  SET_RESULT
} from './actions/answersActions';

import {
  DISPLAY_ALERT,
  SET_INPUT,
  MAKE_REDIRECT,
  DISPLAY_MODAL,
  SET_RANKING
} from './actions/actions';

import {
  SET_GENDER,
  SET_DEPARTMENT,
  SET_DATE,
  UPDATE_CONNECTION,
  DISCONNECT,
  SET_USER_INFOS
} from './actions/userActions';

/**
 * Initial State
 */
const initialState = {
  answers: {},
  proposedQuestions: {},
  questions: [],
  results: {},
  user: {
    id: null,
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
    gender: '',
    departments: '',
    birthDate: '',
    answeredQuestions: []
  },
  userInterface: {
    isConnected: false,
    redirection: '',
    alert: {
      display: false,
      type: '',
      message: ''
    },
    modal: {
      display: false
    }
  },
  ranking: []
};

/**
 * An action arrives. It must be *transformed* in a state mutation, that is,
 * the reducer *must* return an edited copy of the current state.
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ANSWER: {
      const newAnswer = {
        questions: '/api/questions/' + action.payload.questions,
        users: '/api/users/' + state.user.id,
        [action.payload.radioName]: action.payload.value
      };
      let answersArray = state.answers;
      answersArray[action.payload.questions] = {
        ...answersArray[action.payload.questions],
        ...newAnswer
      };
      return {
        ...state,
        answers: {...answersArray}
      };
    }

    case PROPOSED_QUESTIONS_DONE: {
      let proposedObject = state.proposedQuestions;
      delete proposedObject[action.payload];
      return {
        ...state,
        proposedQuestions: proposedObject
      };
    }

    case SET_ANSWERED:
      const questionAnswered = action.payload;
      const questionToUpdate = state.questions;

      let answersArray = state.answers;
      questionToUpdate.map(currentQuestion => {
        if (currentQuestion.id in questionAnswered) {
          currentQuestion.answered = true;
          currentQuestion.user_choice = questionAnswered[currentQuestion.id].user_choice || questionAnswered[currentQuestion.id].userChoice;
          currentQuestion.user_predict = questionAnswered[currentQuestion.id].user_predict || questionAnswered[currentQuestion.id].userPredict;
          delete answersArray[currentQuestion.id];
        }
      });

      let arrayAnswered = [];
      Object.keys(questionAnswered).map((valueKey, index) => {
        arrayAnswered.push(questionAnswered[valueKey]);
      });

      arrayAnswered.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.published_date) - new Date(a.published_date);
      });

      return {
        ...state,
        questions: [...questionToUpdate],
        answers: {...answersArray},
        user: {
          ...state.user,
          answeredQuestions: [...arrayAnswered]
        }
      };
    case RECEIVE_DAILY_QUESTIONS:
      return {
        ...state,
        questions: [...action.payload]
      };
    case RECEIVE_PROPOSED_QUESTIONS:
      return {
        ...state,
        proposedQuestions: action.payload
      };
    case SET_INPUT:
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.inputName]: action.payload.value
        }
      };
    case SET_INPUT_PROPOSED_QUESTIONS:
      let proposedObject = state.proposedQuestions;
      // console.log('-----BEFORE-----');
      // console.log(proposedObject);
      proposedObject[action.payload.id] = {
        ...proposedObject[action.payload.id],
        [action.payload.inputName]: action.payload.value
      };
      // console.log('-----AFTER-----');
      // console.log(proposedObject);
      return {
        ...state,
        proposedQuestions: proposedObject
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
    case SET_DEPARTMENT:
      return {
        ...state,
        user: {
          ...state.user,
          departments: action.payload
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
    case DISPLAY_MODAL:
      return {
        ...state,
        userInterface: {
          ...state.userInterface,
          modal: {
            ...state.userInterface.modal,
            display: action.payload
          }
        }
      };
    case SET_RESULT:
      return {
        ...state,
        results: action.payload
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
        ranking: state.ranking
      };
    case SET_RANKING:
      return {
        ...state,
        ranking: action.payload
      };
    default:
      return state;
  }
};

/**
 * ￼Export
 */
export default reducer;
