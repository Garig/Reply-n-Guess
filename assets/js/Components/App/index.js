/**
 * Import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
    <Switch>
      <Route exact path='/' component={DailyQuestions} />
    </Switch>
    <Footer />
  </section>

);

/**
 * Export
 */
export default App;
