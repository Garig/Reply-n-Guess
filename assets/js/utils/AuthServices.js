import axios from 'axios';
import decode from 'jwt-decode';
import { URL } from '../store/middlewares/middleware';

export class AuthService {
  signup(payload) {
    return axios
      .post(`${URL}/api/users`, payload)
      .then(response => response.data)
      .catch(error => error.response.data['hydra:description'].slice(-9, -1));
  }
}
