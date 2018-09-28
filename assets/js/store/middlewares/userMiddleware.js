/**
 * Package Import
 */
import * as Joi from 'joi-browser';
import axios from 'axios';

/*
 * Local import
 */

// Actions générales
import { displayAlert, makeRedirect } from '../actions/actions';
import { setAnswered } from '../actions/answersActions';

// Actions spécifiques à l'user
import {
  SUBMIT_SIGNUP,
  SUBMIT_LOGIN,
  updateConnection,
  LOGGED_IN,
  DISCONNECT,
  setUserInfos,
  UPDATE_PROFILE
} from '../actions/userActions';

// Validations des données
import {
  schemaSignUp,
  schemaLogin,
  updateProfile
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
      if (Auth.loggedIn()) {
        store.dispatch(updateConnection(true));
        const userObject = Auth.getProfile();
        store.dispatch(setUserInfos(userObject));
        Auth.getQuestion(userObject.id)
          .then(arrayQuestionAnswered => store.dispatch(setAnswered(arrayQuestionAnswered)))
          .catch(err => console.log(err));
      }
      break;
    }

    case DISCONNECT: {
      Auth.logout();
      store.dispatch(makeRedirect('/'));
      store.dispatch(updateConnection(false));
      break;
    }

    case UPDATE_PROFILE: {
      console.log('UPDATE_PROFILE');
      const { username, password, passwordConfirm, email, gender, birthDate } = store.getState().user;

      let payload = {
        username,
        email,
        gender,
        birthDate
      };

      if (password !== '' && passwordConfirm !== '' && password === passwordConfirm) {
        payload = {
          ...payload,
          password,
          passwordConfirm
        };
      }

      console.log(payload);

      Joi.validate(payload, updateProfile, (err, value) => {
        if (err) store.dispatch(displayAlert({type: 'error', message: err.message}));
        else {
          store.dispatch(displayAlert({type: 'info', message: 'Envoi du formulaire...'}));
          Auth.updateProfile(payload)
            .then(objectUserCreated => {
              store.dispatch(displayAlert({type: 'success', message: 'Modifications validées !'}));
              setTimeout(() => {
                store.dispatch(makeRedirect('/profile'));
              }, 1000);

            })
            .catch(errorCodeAPI => {
              console.log(errorCodeAPI);
              // if (errorCodeAPI === 'F85E0677') store.dispatch(displayAlert({type: 'error', message: 'Pseudo déjà utilisé !'}));
              // if (errorCodeAPI === 'E7927C74') store.dispatch(displayAlert({type: 'error', message: 'Email déjà utilisée !'}));
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
export default userMiddleware;
