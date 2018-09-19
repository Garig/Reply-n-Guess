import {
  LOAD_DAILY_QUESTIONS,
  receiveDailyQuestions,
  SUBMIT_SIGNUP,
  SUBMIT_LOGIN
} from '../actions';

import decode from 'jwt-decode';

import axios from 'axios';

const URL = 'http://localhost:8000';

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
      const { username, password, email, birthDate, gender } = store.getState().user;
      const payload = {
        username,
        password,
        email,
        birthDate,
        gender,
        'role': '/api/roles/1'
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
    case SUBMIT_LOGIN: {
      const { username, password } = store.getState().user;
      const payload = {
        username,
        password
      };
      axios
        .post(`${URL}/login_check`, payload)
        .then(function(response) {
          let token = response.data.token;
          console.log('---------TOKEN--------');
          console.log(token);
          console.log('---------DECODE--------');
          const decoded = decode(response.data.token);
          console.log(decoded);
          axios.get('/api/jwt', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json'}
          })
            .then(function(response) {
              console.log('Réponse en retour : ', response.data);
            })
            .catch(error => console.log('error token : ', error));
        })
        .catch(error => console.log('error', error));
      break;
    }
    default:
  }
  next(action);
};

export default questionsMiddleware;
