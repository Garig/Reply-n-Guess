/**
 * Package Import
 */

import PropTypes from 'prop-types';

/**
 * PropTypes
 */

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

export const userType =
  PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirm: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired
  });

export const userInterfaceType =
  PropTypes.shape({
    isConnected: PropTypes.bool.isRequired,
    alert: PropTypes.shape({
      display: PropTypes.bool.isRequired,
      type: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired
    }).isRequired
  });

export const setInputType = PropTypes.func;

export const submitLoginType = PropTypes.func;
