/**
 * Types d'action
 */
// Exemple
export const DO_SOMETHING = 'actions/DO_SOMETHING';

// Pour tous les inputs controllés
export const SET_INPUT = 'actions/SET_INPUT';

// Pour display une alert
export const DISPLAY_ALERT = 'actions/DISPLAY_ALERT';

// Pour display une alert
export const HIDE_ALERT = 'actions/HIDE_ALERT';

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

// Pour display une alert
export const hideAlert = payload => ({
  type: HIDE_ALERT,
  payload
});
