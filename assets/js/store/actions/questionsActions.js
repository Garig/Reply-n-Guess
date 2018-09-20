/**
 * Types d'action
 */
// Pour les 3 questions du jour
export const LOAD_DAILY_QUESTIONS = 'actions/LOAD_DAILY_QUESTIONS';
export const RECEIVE_DAILY_QUESTIONS = 'actions/RECEIVE_DAILY_QUESTIONS';

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
