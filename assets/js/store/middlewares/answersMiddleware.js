/**
 * Package Import
 */
import axios from 'axios';

/**
 * Local import
 */
import { URL } from './middleware';
import {
  SEND_ANSWER
} from '../actions/answersActions';

const answersMiddleware = store => next => (action) => {
  switch (action.type) {
    case SEND_ANSWER: {
      console.log('SEND_ANSWER');

      const payload = store.getState().answers;
      console.log(payload);
      if (payload.userChoice !== null && payload.userPredict !== null) {
        axios
          .post(`${URL}/api/answers`, payload)
          .then(response => console.log(response))
          .catch(error => console.log(error));
      }
      break;
    }
    default:
  }
  next(action);
};

/**
 * Export
 */
export default answersMiddleware;
