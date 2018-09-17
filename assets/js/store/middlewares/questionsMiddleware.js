import {
  LOAD_DAILY_QUESTIONS,
  receiveDailyQuestions,
  SUBMIT_SIGNUP

} from '../actions';
import axios from 'axios';

const URL = 'http://localhost:8000';

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
    case SUBMIT_SIGNUP: {
      const { username, password, email, birthDate } = store.getState();
      break;
    }
    default:
  }
  next(action);
};

export default questionsMiddleware;
