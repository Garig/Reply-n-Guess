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
    this.props.makeRedirect();
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
