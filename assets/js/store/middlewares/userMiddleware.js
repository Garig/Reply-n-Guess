/**
 * Package Import
 */
import axios from 'axios';
import decode from 'jwt-decode';
import * as Joi from 'joi-browser';

/*
 * Local import
 */
import { URL } from './middleware';
import { displayAlert } from '../actions/actions';
import {
  SUBMIT_SIGNUP,
  SUBMIT_LOGIN,
  updateConnection
} from '../actions/userActions';

import {
  schemaSignUp,
  schemaLogin
} from '../../utils/validationJoi';

const userMiddleware = store => next => (action) => {
  switch (action.type) {
    case SUBMIT_SIGNUP: {
      const { username, password, passwordConfirm, email, gender, birthDate } = store.getState().user;

      const payload = {
        username,
        password,
        passwordConfirm,
        email,
        gender,
        birthDate,
        'role': '/api/roles/1'
      };

      Joi.validate(payload, schemaSignUp, (err, value) => {
        if (err) store.dispatch(displayAlert({type: 'error', message: err.message}));
        else {
          store.dispatch(displayAlert({type: 'info', message: 'Envoi du formulaire...'}));
          axios
            .post(`${URL}/api/users`, payload)
            .then(function(response) {
              console.log(response.data);
              // TODO : clear les inputs
              store.dispatch(displayAlert({type: 'success', message: 'Inscription réussie !'}));
            })
            .catch(function(error) {
              let errorCodeAPI = error.response.data['hydra:description'].slice(-9, -1);
              // F85E0677 ==> username déjà inscrit en BDD
              if (errorCodeAPI === 'F85E0677') store.dispatch(displayAlert({type: 'error', message: 'Pseudo déjà utilisé !'}));
              // E7927C74 ==> email déjà inscrit en BDD
              if (errorCodeAPI === 'E7927C74') store.dispatch(displayAlert({type: 'error', message: 'Email déjà utilisée !'}));
            });
        }
      });
      break;
    }
    case SUBMIT_LOGIN: {
      const { username, password } = store.getState().user;

      const payload = {
        username,
        password
      };

      Joi.validate(payload, schemaLogin, (err, value) => {
        if (err) store.dispatch(displayAlert({type: 'error', message: err.message}));
        else {
          store.dispatch(displayAlert({type: 'info', message: 'Envoi du formulaire...'}));
          axios
            .post(`${URL}/login_check`, payload)
            .then(function(response) {
              let token = response.data.token;
              console.log('---------TOKEN--------');
              console.log(token);
              console.log('---------DECODE--------');
              const decoded = decode(response.data.token);
              console.log(decoded);
              axios
                .get('/api/jwt', {
                  headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                })
                .then(function(response) {
                  console.log('Réponse en retour : ', response.data);
                  store.dispatch(displayAlert({type: 'success', message: 'Connexion réussie !'}));
                  localStorage.setItem('token', token);
                  setTimeout(() => {
                    store.dispatch(updateConnection(true));
                  }, 1000);
                })
                .catch(function(error) {
                  if (err) store.dispatch(displayAlert({type: 'error', message: 'Problème de connexion merci de ressayer'}));
                  console.log('error token : ', error);
                });
            })
            .catch(function(error) {
              if (error) store.dispatch(displayAlert({type: 'error', message: 'Identifiants invalides !'}));
            });
        }
      });
      break;
    }
    default:
  }
  next(action);
};

export default userMiddleware;
