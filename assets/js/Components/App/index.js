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
const App = () => (
  <div id="app">
    App
    <DailyQuestions />
    <Form />
  </div>
);

/**
 * Export
 */
export default App;