/**
 * Import
 */
import React from 'react';
import axios from 'axios';

/**
 * Local import
 */

// Styles et assets
// import './app.sass';

/**
 * Code
 */
class DailyQuestions extends React.Component {
  componentWillMount() {
    const URL = 'http://localhost:8001/api';
    axios
      .get(`${URL}/questions`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        DailyQuestion
      </div>
    );
  }
};

/**
 * Export
 */
export default DailyQuestions;
