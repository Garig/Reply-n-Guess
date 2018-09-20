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

const userMiddleware = store => next => (action) => {
  switch (action.type) {
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

      const schema = {
        name: Joi.string().alphanum().min(2).max(30).required(),
        email: Joi.string().email()
      };

      const value = {
        name: username,
        email: email
      };

      Joi.validate(value, schema, (err, value) => {
        console.log(err);
      });
      // err -> null
      // value.name -> 'la value du sate clé name'

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

export default userMiddleware;

// const schema = Joi.isObject()
//   .keys({
//     // Requires a given string value
//     username: Joi.string()
//       .alphanum()
//       .min(3)
//       .max(30)
//       .required(),
//     // Requires a given string value
//     password: Joi.string()
//       .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
//       .required(),
//     // Force passwords to match
//     // password_confirmation: Joi.any()
//     //   .equal(Joi.ref('password'))
//     //   .required(),
//     // Accept different Joi types. Optional, unconstrained string or number
//     // access_token : [Joi.string(), Joi.number()],
//     // Validate email address from example.com (remember spoofing) considerations)
//     email: Joi.string()
//       .email()
//       .regex(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),
//     gender: Joi.string()
//       .equal(['M', 'F', 'MALE', 'FEMALE', 'H', 'Homme', 'homme', 'Femme', 'femme'])
//       .required(),
//     // Required birthyear to be an int between range
//     birthyear: Joi.number()
//       .integer()
//       .min(1900)
//       .max(2013)
//       .required()
//   });
