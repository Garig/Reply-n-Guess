/**
 * Package Import
 */
import PropTypes from 'prop-types';

/**
 * PropTypes
 */
// Validation pour la prop question du state
export const QuestionsType =
  PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    prop_1: PropTypes.string.isRequired,
    prop_2: PropTypes.string.isRequired,
    submit_date: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string
  }));

// Validation de la prop user du state
export const userType =
  PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirm: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    departments: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]).isRequired,
    birthDate: PropTypes.string.isRequired
  });

// Validation de la prop userInterface du state
export const userInterfaceType =
  PropTypes.shape({
    isConnected: PropTypes.bool.isRequired,
    redirection: PropTypes.string.isRequired,
    alert: PropTypes.shape({
      display: PropTypes.bool.isRequired,
      type: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired
    }).isRequired
  });

// Validation pour les actions du reducer
export const setInputType = PropTypes.func;
export const submitLoginType = PropTypes.func;
export const setGenderType = PropTypes.func;
export const setDepartmentType = PropTypes.func;
export const setDateType = PropTypes.func;
export const submitSignupType = PropTypes.func;
export const submitProposeType = PropTypes.func;
export const updateProfileType = PropTypes.func;
export const setAnswerType = PropTypes.func;
export const disconnectType = PropTypes.func;
export const loadDailyQuestionsType = PropTypes.func;
export const makeRedirectType = PropTypes.func;
export const loggedInType = PropTypes.func;
