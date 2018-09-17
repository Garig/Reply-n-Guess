/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
import Header from '../Header';
import DailyQuestions from '../../containers/DailyQuestions';
import Footer from '../Footer';

// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = () => (
  <section className="app">
    <Header />
    <DailyQuestions />
    <Footer />
  </section>
);

/**
 * Export
 */
export default App;
