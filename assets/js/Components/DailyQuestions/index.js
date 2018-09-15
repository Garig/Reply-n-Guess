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

const DailyQuestions = ({ loadDailyQuestions }) => {
  loadDailyQuestions();
  return (
    <div>
     Daily
    </div>
  );
};

/**
 * Export
 */
export default DailyQuestions;
