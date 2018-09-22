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
        .post(`${URL}/login_get_user_token`, payload)
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
        .get('/api/jwt/connect_user', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          this.setToken(token);
          resolve(response.data.token);
        })
        .catch(error => reject(error))
    );
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // Getting token from localstorage
    return token ? true : false;
  }

  setToken(token) {
    // Saves user token to localStorage
    localStorage.setItem('token', token);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('token');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('token');
  }
}
