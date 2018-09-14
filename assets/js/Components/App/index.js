/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
import DailyQuestions from '../DailyQuestions';
import Form from '../Form';

// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = ({ doSomething }) => (
  <div id="app">
    <p onClick={doSomething}>App</p>
    <DailyQuestions />
    <Form />
  </div>
);

/**
 * Export
 */
export default App;