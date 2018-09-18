import {
  LOAD_DAILY_QUESTIONS,
  receiveDailyQuestions,
  SUBMIT_SIGNUP

} from '../actions';
import axios from 'axios';

const URL = 'http://localhost:8001';

const questionsMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_DAILY_QUESTIONS: {
      store.dispatch(dispatch => {
        axios
          .get(`${URL}/api/dailyQuestions`)
          .then(response => {
            dispatch(receiveDailyQuestions(response.data['hydra:member']));
          })
          .catch(error => console.log(error));
      });
      break;
    }
    case SUBMIT_SIGNUP: {
      const { username, password, email, gender, birthDate } = store.getState().user;
      const payload = {
        username,
        password,
        email,
        birthDate,
        gender,
        roles: '/api/roles/1'
      };
      console.log(payload);
      axios
        .post(`${URL}/api/users`, payload)
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          let errorcode = error.response.data['hydra:description'].slice(-9, -1);
          console.log(errorcode);
          // TODO: Effectuer un traitement selon le code erreur rencontrer :
          // F85E0677 ==> username déjà inscrit en BDD
          // E7927C74 ==> email déjà inscrit en BDD
        });
      break;
    }
    default:
  }
  next(action);
};

export default questionsMiddleware;
