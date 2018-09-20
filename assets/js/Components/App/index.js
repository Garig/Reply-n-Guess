/**
 * Package Import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
import Header from '../Header';
import DailyQuestions from '../../containers/DailyQuestions';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
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
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
    </Switch>
    <Footer />
  </section>

);

/**
 * Export
 */
export default App;
