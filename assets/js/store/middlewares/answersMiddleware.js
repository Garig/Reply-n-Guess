/**
 * Package Import
 */
import axios from 'axios';

/**
 * Local import
 */
import { URL } from './middleware';
import {
  SEND_ANSWER,
  setAnswered
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
              console.log('SEND');
              console.log(currentAnswer);
              axios
                .post(`${URL}/api/answers`, currentAnswer, {
                  headers: {
                    'Content-Type': 'application/ld+json'
                  }
                })
                .then(response => {
                  store.dispatch(setAnswered([action.payload]));
                })
                .catch(error => console.log(error));
            }
          }
        }
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
export default answersMiddleware;
