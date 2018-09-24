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
              axios
                .post(`${URL}/api/answers`, currentAnswer)
                .then(response => {
                  const { id } = store.getState().user;
                  axios
                    .get(`/api/users/${id}/answeredQuestions`)
                    .then(response => {
                      let arrayQuestionAnswered = [];
                      response.data['hydra:member'].map(current => {
                        arrayQuestionAnswered.push(current.id);
                      });
                      console.log('-----TOUTES LES ID QUESTIONS REPONDUS-----');
                      console.log(arrayQuestionAnswered);
                      store.dispatch(setAnswered(arrayQuestionAnswered));
                    })
                    .catch(error => console.log(error));
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
