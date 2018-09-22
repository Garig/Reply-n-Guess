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
  signup(payload) {
    return new Promise((resolve, reject) =>
      axios
        .post(`${URL}/api/users`, payload)
        .then(response => resolve(response.data))
        .catch(error => reject(error.response.data['hydra:description'].slice(-9, -1)))
    );
  }
}
