/**
 * Types d'action
 */
// Exemple
export const DO_SOMETHING = 'actions/DO_SOMETHING';
// Pour les 3 questions du jour
export const LOAD_DAILY_QUESTIONS = 'actions/LOAD_DAILY_QUESTIONS';
export const RECEIVE_DAILY_QUESTIONS = 'actions/RECEIVE_DAILY_QUESTIONS';
// Pour le Signup
export const SET_INPUT = 'actions/SET_INPUT';
export const SET_GENDER = 'actions/SET_GENDER';
export const SET_DATE = 'actions/SET_DATE';
export const SUBMIT_SIGNUP = 'actions/SUBMIT_SIGNUP';
// Pour le Login
export const SUBMIT_LOGIN = 'actions/SUBMIT_LOGIN';

/**
 * Action creators
 */
// On fait qqchose
export const doSomething = () => ({
  type: DO_SOMETHING
});

export const loadDailyQuestions = () => ({
  type: LOAD_DAILY_QUESTIONS
});

export const receiveDailyQuestions = payload => ({
  type: RECEIVE_DAILY_QUESTIONS,
  payload
});

export const setInput = payload => ({
  type: SET_INPUT,
  payload
});

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

export const submitLogin = payload => ({
  type: SUBMIT_LOGIN,
  payload
});
