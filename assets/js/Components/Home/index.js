/**
 * Package Import
 */
import React from 'react';

/**
 * Local import
 */
import DailyQuestions from '../../containers/DailyQuestions';

// Styles et assets

/**
 * Code
 */
class Home extends React.Component {
  componentDidMount() {
    this.props.loadDailyQuestions();
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

/**
 * Export
 */
export default Home;
