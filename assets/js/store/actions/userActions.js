/**
 * Types d'action
 */
// Verification si logger
export const LOGGED_IN = 'actions/LOGGED_IN';
export const DISCONNECT = 'actions/DISCONNECT';
export const SET_USER_INFOS = 'actions/SET_USER_INFOS';

// Pour le Signup
export const SET_GENDER = 'actions/SET_GENDER';
export const SET_DATE = 'actions/SET_DATE';
export const SUBMIT_SIGNUP = 'actions/SUBMIT_SIGNUP';
export const UPDATE_PROFILE = 'actions/UPDATE_PROFILE';

// Pour le Login
export const SUBMIT_LOGIN = 'actions/SUBMIT_LOGIN';
export const UPDATE_CONNECTION = 'actions/UPDATE_CONNECTION';

/**
 * Action creators
 */

// Verification si logger
export const loggedIn = () => ({
  type: LOGGED_IN
});

// Deconnecter le user
export const disconnect = () => ({
  type: DISCONNECT
});

// Stock les infos user dans le state
export const setUserInfos = payload => ({
  type: SET_USER_INFOS,
  payload
});

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

export const updateProfile = () => ({
  type: UPDATE_PROFILE
});

// Pour le Login
export const submitLogin = payload => ({
  type: SUBMIT_LOGIN,
  payload
});

export const updateConnection = payload => ({
  type: UPDATE_CONNECTION,
  payload
});
