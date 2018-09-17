/**
 * Types d'action
 */
export const DO_SOMETHING = 'actions/DO_SOMETHING';
export const LOAD_DAILY_QUESTIONS = 'actions/LOAD_DAILY_QUESTIONS';
export const RECEIVE_DAILY_QUESTIONS = 'actions/RECEIVE_DAILY_QUESTIONS';
export const SET_INPUT = 'actions/SET_INPUT';

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