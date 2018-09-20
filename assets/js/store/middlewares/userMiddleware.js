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
import {
  SUBMIT_SIGNUP,
  SUBMIT_LOGIN
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
        err
          ? console.log(err.message)
          : axios
            .post(`${URL}/api/users`, payload)
            .then(function(response) {
              console.log(response.data);
            // TODO : clear les inputs
            })
            .catch(function(error) {
              let errorcode = error.response.data['hydra:description'].slice(-9, -1);
              console.log(errorcode);
              // TODO: Effectuer un traitement selon le code erreur rencontrer :
              // F85E0677 ==> username déjà inscrit en BDD
              // E7927C74 ==> email déjà inscrit en BDD
            });
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
        err
          ? console.log(err.message)
          : axios
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
                })
                .catch(error => console.log('error token : ', error));
            })
            .catch(error => console.log('error', error));
      });
      break;
    }
    default:
  }
  next(action);
};

export default userMiddleware;
