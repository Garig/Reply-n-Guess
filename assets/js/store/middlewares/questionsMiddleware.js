import {
  LOAD_DAILY_QUESTIONS
} from '../actions';
import axios from 'axios';

const URL = 'http://localhost:8001';

const questionsMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_DAILY_QUESTIONS: {
      console.log('LOAD_DAILY_QUESTIONS');
      axios
        .get(`${URL}/dailyQuestion`)
        .then(response => console.log(response))
        .catch(error => console.log(error));
      break;
    }
    default:
  }
  next(action);
};

export default questionsMiddleware;
