/**
 * Package Import
 */
import * as Joi from 'joi-browser';
import axios from 'axios';

/**
 * Local import
 */
// Actions générales
import { displayAlert } from '../actions/actions';
import { URL } from './middleware';

// Actions spécifiques aux questions
import {
  LOAD_DAILY_QUESTIONS,
  SUBMIT_PROPOSE,
  receiveDailyQuestions
} from '../actions/questionsActions';

// Validations des données
import {
  schemaProposeQuestion
} from '../../utils/validationJoi';

/*
 * Code
 */
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

      Joi.validate(payload, schemaProposeQuestion, (err, value) => {
        if (err) {
          console.log('ERREUR JOI');
          store.dispatch(displayAlert({type: 'error', message: err.message}));
        }
        else {
          console.log('JOI');
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
export default questionsMiddleware;
