/**
 * Package Import
 */
import React from 'react';

/**
 * Local import
 */
import {
  loadDailyQuestionsType,
  makeRedirectType,
  loggedInType
} from '../../utils/validationPropTypes';

import DailyQuestions from '../../containers/DailyQuestions';

// Styles et assets

/**
 * Code
 */
class Home extends React.Component {
  componentDidMount() {
    this.props.makeRedirect();
    this.props.loggedIn();
  }

  render() {
    return (
      <DailyQuestions />
    );
  }
}

/**
 * PropTypes
 */
Home.propTypes = {
  loadDailyQuestions: loadDailyQuestionsType.isRequired,
  makeRedirect: makeRedirectType.isRequired,
  loggedIn: loggedInType.isRequired
};

/**
 * Export
 */
export default Home;
