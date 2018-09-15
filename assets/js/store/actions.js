/**
 * Types d'action
 */
export const DO_SOMETHING = 'actions/DO_SOMETHING';
export const LOAD_DAILY_QUESTIONS = 'actions/LOAD_DAILY_QUESTIONS';

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
