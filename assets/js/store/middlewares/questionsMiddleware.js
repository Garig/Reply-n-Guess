/**
 * Package Import
 */
import * as Joi from 'joi-browser';
import axios from 'axios';
import moment from 'moment';

/**
 * Local import
 */
// Actions générales
import { displayAlert, makeRedirect } from '../actions/actions';

import { URL } from '../../utils/url';

// Actions spécifiques aux questions
import {
  LOAD_DAILY_QUESTIONS,
  receiveDailyQuestions,
  SUBMIT_PROPOSE,
  LOAD_PROPOSED_QUESTIONS,
  receiveProposedQuestions,
  VOTE_VALIDATE_PROPOSED_QUESTIONS,
  VOTE_DECLINE_PROPOSED_QUESTIONS,
  proposedQuestionsDone
} from '../actions/questionsActions';

// Validations des données
import {
  schemaProposeQuestion
} from '../../utils/validationJoi';

/**
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

      Joi.validate(payload, schemaProposeQuestion, (err, value) => {
        if (err) {
          console.log('ERREUR JOI');
          store.dispatch(displayAlert({type: 'error', message: err.message}));
        } else {
          console.log('JOI OK');
          // TODO: vider les champs
          axios
            .post(`${URL}/api/questions`, payload, {
              headers: {
                'Content-Type': 'application/ld+json'
              }
            })
            .then(response => {
              console.log(response.data);
              store.dispatch(displayAlert({type: 'success', message: 'Question envoyée !'}));
              setTimeout(() => { store.dispatch(makeRedirect('/propose_questions')); }, 1000);
            })
            .catch(error => {
              console.log(error);
            });
        }
      });
      break;
    }
    case VOTE_VALIDATE_PROPOSED_QUESTIONS: {
      console.log('VALIDATE_PROPOSE');
      const { id, title, prop_1, prop_2 } = store.getState().proposedQuestions[action.payload];
      const payload = {
        title,
        prop1: prop_1,
        prop2: prop_2,
        validateDate: moment().format('YYYY-MM-DD hh:mm:ss'),
        'statuses': '/api/statuses/2'
      };

      console.log(payload);

      Joi.validate(payload, schemaProposeQuestion, (err, value) => {
        if (err) {
          store.dispatch(displayAlert({type: 'error', message: err.message}));
        } else {
          axios
            .put(`/api/questions/${id}`, payload, {
              headers: {
                'Content-Type': 'application/ld+json'
              }
            })
            .then(response => {
              console.log(response.data);
              store.dispatch(displayAlert({type: 'success', message: 'Question validée !'}));
              setTimeout(() => { store.dispatch(makeRedirect('/vote_proposed_questions')); }, 1000);
            })
            .catch(error => {
              console.log(error);
            });
        }
      });
      break;
    }
    case VOTE_DECLINE_PROPOSED_QUESTIONS: {
      console.log('DECLINE_PROPOSE');
      const { id } = store.getState().proposedQuestions[action.payload];

      const payload = {
        declineDate: moment().format('YYYY-MM-DD hh:mm:ss'),
        'statuses': '/api/statuses/4'
      };

      axios
        .put(`api/questions/${id}`, payload, {
          headers: {
            'Content-Type': 'application/ld+json'
          }
        })
        .then(response => {
          console.log(response.data);
          store.dispatch(displayAlert({type: 'success', message: 'Question refusée !'}));
          store.dispatch(proposedQuestionsDone(id));
          setTimeout(() => { store.dispatch(makeRedirect('/vote_proposed_questions')); }, 1000);
        })
        .catch(error => {
          console.log(error);
        });
      break;
    }
    case LOAD_PROPOSED_QUESTIONS: {
      store.dispatch(dispatch => {
        axios
          .get(`${URL}/api/getProposedQuestions`)
          .then(response => {
            let objectProposedQuestions = {};
            response.data['hydra:member'].map(current => {
              objectProposedQuestions[current.id] = current;
            });
            console.log(objectProposedQuestions);
            dispatch(receiveProposedQuestions(objectProposedQuestions));
          })
          .catch(error => console.log(error));
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
