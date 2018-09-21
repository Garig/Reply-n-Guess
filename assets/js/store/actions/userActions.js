/**
 * Types d'action
 */
// Pour le Signup
export const SET_GENDER = 'actions/SET_GENDER';
export const SET_DATE = 'actions/SET_DATE';
export const SUBMIT_SIGNUP = 'actions/SUBMIT_SIGNUP';

// Pour le Login
export const SUBMIT_LOGIN = 'actions/SUBMIT_LOGIN';
export const UPDATE_CONNECTION = 'actions/UPDATE_CONNECTION';

/**
 * Action creators
 */

// Pour le Signup
export const setGender = payload => ({
  type: SET_GENDER,
  payload
});

export const setDate = payload => ({
  type: SET_DATE,
  payload
});

export const submitSignup = payload => ({
  type: SUBMIT_SIGNUP,
  payload
});

// Pour le Login
export const submitLogin = payload => ({
  type: SUBMIT_LOGIN,
  payload
});

// Pour le Login
export const updateConnection = payload => ({
  type: UPDATE_CONNECTION,
  payload
});
