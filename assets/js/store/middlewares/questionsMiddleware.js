import {
  LOAD_DAILY_QUESTIONS,
  receiveDailyQuestions
} from '../actions';
import axios from 'axios';

const URL = 'http://localhost:8001';

const questionsMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_DAILY_QUESTIONS: {
      console.log('LOAD_DAILY_QUESTIONS');
      axios
        .get(`${URL}/dailyQuestion`)
        .then(response => {
          store.dispatch(receiveDailyQuestions(response.data));
        })
        .catch(error => console.log(error));
      break;
    }
    default:
  }
  next(action);
};

export default questionsMiddleware;
