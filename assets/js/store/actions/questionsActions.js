/**
 * Types d'action
 */

// Pour tous les inputs controllés
export const SET_INPUT_PROPOSED_QUESTIONS = 'actions/SET_INPUT_PROPOSED_QUESTIONS';

// Pour les 3 questions du jour
export const LOAD_DAILY_QUESTIONS = 'actions/LOAD_DAILY_QUESTIONS';
export const RECEIVE_DAILY_QUESTIONS = 'actions/RECEIVE_DAILY_QUESTIONS';

// Pour soumettre une question à la communauté
export const SUBMIT_PROPOSE = 'actions/SUBMIT_PROPOSE';

// Pour voter pour une question
export const LOAD_PROPOSED_QUESTIONS = 'actions/LOAD_PROPOSED_QUESTIONS';
export const RECEIVE_PROPOSED_QUESTIONS = 'actions/RECEIVE_PROPOSED_QUESTIONS';
export const VOTE_VALIDATE_PROPOSED_QUESTIONS = 'actions/VOTE_VALIDATE_PROPOSED_QUESTIONS';
export const VOTE_DECLINE_PROPOSED_QUESTIONS = 'actions/VOTE_DECLINE_PROPOSED_QUESTIONS';
export const PROPOSED_QUESTIONS_DONE = 'actions/PROPOSED_QUESTIONS_DONE';

/**
 * Action creators
 */
// Pour tous les inputs controllés
export const setInputProposedQuestions = payload => ({
  type: SET_INPUT_PROPOSED_QUESTIONS,
  payload
});

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

// Pour voter pour une question
export const loadProposedQuestions = () => ({
  type: LOAD_PROPOSED_QUESTIONS
});

export const receiveProposedQuestions = payload => ({
  type: RECEIVE_PROPOSED_QUESTIONS,
  payload
});

export const voteValidateProposedQuestions = payload => ({
  type: VOTE_VALIDATE_PROPOSED_QUESTIONS,
  payload
});

export const voteDeclineProposedQuestions = payload => ({
  type: VOTE_DECLINE_PROPOSED_QUESTIONS,
  payload
});

export const proposedQuestionsDone = payload => ({
  type: PROPOSED_QUESTIONS_DONE,
  payload
});