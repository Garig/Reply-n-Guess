/**
 * Types d'action
 */
// Exemple
export const DO_SOMETHING = 'actions/DO_SOMETHING';

// Pour tous les inputs controllés
export const SET_INPUT = 'actions/SET_INPUT';

/**
 * Action creators
 */
// Exemple
export const doSomething = () => ({
  type: DO_SOMETHING
});

// Pour tous les inputs controllés
export const setInput = payload => ({
  type: SET_INPUT,
  payload
});
