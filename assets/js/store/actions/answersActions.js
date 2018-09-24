/**
 * Types d'action
 */
// Exemple
export const SET_ANSWER = 'actions/SET_ANSWER';
export const SEND_ANSWER = 'actions/SEND_ANSWER';
export const SET_ANSWERED = 'actions/SET_ANSWERED';

/**
 * Action creators
 */
// Exemple
export const setAnswer = payload => ({
  type: SET_ANSWER,
  payload
});

export const sendAnswer = () => ({
  type: SEND_ANSWER
});

export const setAnswered = payload => ({
  type: SET_ANSWERED,
  payload
});
