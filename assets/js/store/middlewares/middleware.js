/**
 * Package Import
 */
import axios from 'axios';

/**
 * Local import
 */
// Actions générales
import { 
  displayAlert,
  GET_RANKING,
  setRanking
} from '../actions/actions';

/**
 * Export de l'addresse du serveur
 */
export const URL = 'http://localhost:8000';
/*
 * Code
 */
const middleware = store => next => (action) => {
  switch (action.type) {
    case GET_RANKING: {
      axios
        .get('/api/getRanking')
        .then(response => store.dispatch(setRanking(response.data['hydra:member'])))
        .catch(err => console.log(err));
    }
  }
  next(action);
};

/**
 * Export
 */
export default middleware;