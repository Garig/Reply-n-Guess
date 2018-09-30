/**
 * Types d'action
 */
// Pour les 3 questions du jour
export const LOAD_DAILY_QUESTIONS = 'actions/LOAD_DAILY_QUESTIONS';
export const RECEIVE_DAILY_QUESTIONS = 'actions/RECEIVE_DAILY_QUESTIONS';

// Pour soumettre une question à la communauté
export const SUBMIT_PROPOSE = 'actions/SUBMIT_PROPOSE';

/**
 * Action creators
 */
// Pour les 3 questions du jour
export const loadDailyQuestions = () => ({
  type: LOAD_DAILY_QUESTIONS
});

export const receiveDailyQuestions = payload => ({
  type: RECEIVE_DAILY_QUESTIONS,
  payload
});

// Pour soumettre une question à la communauté
export const submitPropose = () => ({
  type: SUBMIT_PROPOSE
});
