/**
 * Package Import
 */
import axios from 'axios';
import * as Joi from 'joi-browser';

/*
 * Local import
 */
// URL serveur
import { URL } from './middleware';

// Actions générales
import { displayAlert, makeRedirect } from '../actions/actions';

// Actions spécifiques à l'user
import {
  SUBMIT_SIGNUP,
  SUBMIT_LOGIN,
  updateConnection,
  LOGGED_IN
} from '../actions/userActions';

// Validations des données
import {
  schemaSignUp,
  schemaLogin
} from '../../utils/validationJoi';

// Centralisation des méthodes correspondant aux connexions users
import {
  AuthService
} from '../../utils/AuthServices';

/*
 * Code
 */

const Auth = new AuthService();

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
          // Demande d'inscription
          Auth.signup(payload)
            .then(objectUserCreated => {
              store.dispatch(displayAlert({type: 'success', message: 'Inscription réussie !'}));
              setTimeout(() => {
                store.dispatch(makeRedirect('/login'));
              }, 1000);
            })
            .catch(errorCodeAPI => {
              if (errorCodeAPI === 'F85E0677') store.dispatch(displayAlert({type: 'error', message: 'Pseudo déjà utilisé !'}));
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
          // Demande de connexion
          Auth.getTokenFromAPI(payload)
            .then(token => {
              // Demande de confirmation
              Auth.connectWithToken(token)
                .then(response => {
                  store.dispatch(displayAlert({type: 'success', message: 'Connexion réussie !'}));
                  setTimeout(() => {
                    store.dispatch(updateConnection(true));
                    store.dispatch(makeRedirect('/'));
                  }, 1000);
                })
                .catch(error => {
                  if (error) store.dispatch(displayAlert({type: 'error', message: 'Problème de connexion merci de ressayer'}));
                });
            })
            .catch(error => {
              if (error) store.dispatch(displayAlert({type: 'error', message: 'Identifiants invalides !'}));
            });
        }
      });
      break;
    }

    case LOGGED_IN: {
      if (Auth.loggedIn()) store.dispatch(updateConnection(true));
      break;
    }

    default:
  }
  next(action);
};

/**
 * Export
 */
export default userMiddleware;
