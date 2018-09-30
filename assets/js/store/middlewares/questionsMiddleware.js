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
  SUBMIT_PROPOSE,
  receiveDailyQuestions
} from '../actions/questionsActions';

const questionsMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_DAILY_QUESTIONS: {
      store.dispatch(dispatch => {
        axios
          .get(`${URL}/api/getDailyQuestions`)
          .then(response => {
            dispatch(receiveDailyQuestions(response.data['hydra:member']));
          })
          .catch(error => console.log(error));
      });
      break;
    }
    case SUBMIT_PROPOSE: {
      console.log('SUBMIT_PROPOSE');
      const { id, title, prop1, prop2 } = store.getState().user;

      const payload = {
        users: `/api/users/${id}`,
        title,
        prop1,
        prop2,
        'statuses': '/api/statuses/3'
      };

      console.log(payload);

      axios
        .post(`${URL}/api/questions`, payload, {
          headers: {
            'Content-Type': 'application/ld+json'
          }
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
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
