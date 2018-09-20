/**
 * Package Import
 */
import axios from 'axios';

/**
 * Local import
 */
import { URL } from './middleware';
import {
  LOAD_DAILY_QUESTIONS,
  receiveDailyQuestions
} from '../actions/questionsActions';

const questionsMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_DAILY_QUESTIONS: {
      store.dispatch(dispatch => {
        axios
          .get(`${URL}/api/dailyQuestions`)
          .then(response => {
            dispatch(receiveDailyQuestions(response.data['hydra:member']));
          })
          .catch(error => console.log(error));
      });
      break;
    }
    default:
  }
  next(action);
};

/**
 * Export
 */
export default questionsMiddleware;
