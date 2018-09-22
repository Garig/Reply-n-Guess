/**
 * Package Import
 */
import axios from 'axios';
import decode from 'jwt-decode';

/*
 * Local import
 */
import { URL } from '../store/middlewares/middleware';

/*
 * Code
 */
export class AuthService {
  // Demande d'inscription
  signup(payload) {
    return new Promise((resolve, reject) =>
      axios
        .post(`${URL}/api/users`, payload)
        .then(response => resolve(response.data))
        .catch(error => reject(error.response.data['hydra:description'].slice(-9, -1)))
    );
  }

  // Demande de connexion
  getTokenFromAPI(payload) {
    return new Promise((resolve, reject) =>
      axios
        .post(`${URL}/login_check`, payload)
        .then(response => {
          const token = response.data.token;
          console.log('---------TOKEN--------');
          console.log(token);
          console.log('---------DECODE--------');
          const decoded = decode(response.data.token);
          console.log(decoded);
          resolve(token);
        })
        .catch(error => reject(error))
    );
  }

  // Demande de confirmation
  connectWithToken(token) {
    return new Promise((resolve, reject) =>
      axios
        .get('/api/jwt', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          localStorage.setItem('token', token);
          resolve(response.data.token);
        })
        .catch(error => reject(error))
    );
  }
}
