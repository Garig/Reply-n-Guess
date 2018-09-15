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
  componentDidMount() {
    this.props.loadDailyQuestions();
  }
  render() {
    return (
      <div>
        {
          this.props.questions.map(current =>
            <ul key={current.id}>
              <li>ID : {current.id}</li>
              <li>TITLE : {current.title}</li>
              <li>PROP 1 : {current.prop1}</li>
              <li>PROP 2 : {current.porp2}</li>
              <li>SUBMIT : {current.submitDate.timestamp}</li>
            </ul>
          )
        }
      </div>
    );
  }
};

/**
 * Export
 */
export default DailyQuestions;
