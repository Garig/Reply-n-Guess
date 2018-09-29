/**
 * Types d'action
 */
// Exemple
export const DO_SOMETHING = 'actions/DO_SOMETHING';

// Pour tous les inputs controllés
export const SET_INPUT = 'actions/SET_INPUT';

// Pour display une alert
export const DISPLAY_ALERT = 'actions/DISPLAY_ALERT';

// Pour display une modal
export const DISPLAY_MODAL = 'actions/DISPLAY_MODAL';

// Pour display une alert
export const HIDE_ALERT = 'actions/HIDE_ALERT';

// Pour faire une redirection
export const MAKE_REDIRECT = 'actions/MAKE_REDIRECT';

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

// Pour display une alert
export const displayAlert = payload => ({
  type: DISPLAY_ALERT,
  payload
});

// Pour display une modal
export const displayModal = payload => ({
  type: DISPLAY_MODAL,
  payload
});

// Pour masquer une alert
export const hideAlert = payload => ({
  type: HIDE_ALERT,
  payload
});

// Pour faire une redirection
export const makeRedirect = payload => ({
  type: MAKE_REDIRECT,
  payload
});
