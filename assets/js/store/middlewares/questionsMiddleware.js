/*
 * Npm import
 */
import axios from 'axios';

/*
 * Local import
 */
import {
  LOAD_DAILY_QUESTIONS,
  receiveDailyQuestions
} from '../actions';

const URL = 'http://localhost:8001';

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

export default questionsMiddleware;
