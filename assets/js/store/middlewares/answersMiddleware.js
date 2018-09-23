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
      const arrayAnswers = store.getState().answers;
      arrayAnswers.map(currentAnswer => {
        if (typeof (currentAnswer) === 'object') {
          if (currentAnswer.userChoice) {
            if (currentAnswer.userPredict) {
              if (currentAnswer.userChoice !== null && currentAnswer.userPredict !== null) {
                console.log('SEND');
                console.log(currentAnswer);
                axios
                  .post(`${URL}/api/answers`, currentAnswer)
                  .then(response => {
                    // store.dispatch(setAnswered(action.payload));
                    // console.log(response);
                    // axios
                    //   .get(`${currentAnswer.users}`)
                    //   .then(response => {
                    //     console.log(response.data.answers);
                    //   })
                    //   .catch(error => console.log(error));
                  })
                  .catch(error => console.log(error));
              }
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
