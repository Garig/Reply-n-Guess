/**
 * Package Import
 */
import axios from 'axios';

/**
 * Local import
 */
// adresse
import { URL } from '../../utils/url';

import {
  SEND_ANSWER,
  setAnswered,
  GET_RESULT,
  setResult
} from '../actions/answersActions';

const answersMiddleware = store => next => (action) => {
  switch (action.type) {
    case SEND_ANSWER: {
      const objectAnswers = store.getState().answers;
      Object.keys(objectAnswers).map((valueKey, index) => {
        var currentAnswer = objectAnswers[valueKey];
        if (currentAnswer.userChoice) {
          if (currentAnswer.userPredict) {
            if (currentAnswer.userChoice !== null && currentAnswer.userPredict !== null) {
              axios
                .post(`${URL}/api/answers`, currentAnswer, {
                  headers: {
                    'Content-Type': 'application/ld+json'
                  }
                })
                .then(response => {
                  store.dispatch(setAnswered({[action.payload]: currentAnswer}));
                })
                .catch(error => console.log(error));
            }
          }
        }
      });
      break;
    }
    case GET_RESULT: {
      axios
        .get(`/api/results/${action.payload}`)
        .then(response => store.dispatch(setResult(response.data)))
        .catch(err => console.log(err));
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
