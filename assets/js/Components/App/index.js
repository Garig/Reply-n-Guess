/**
 * Package Import
 */
import React from 'react';
import { Route, Switch, Redirect, WithRouter } from 'react-router-dom';

/**
 * Local import
 */
import Header from '../../containers/Header';
import Home from '../../containers/Home';
import OpenQuestions from '../OpenQuestions';
import LastestResults from '../LastestResults';
import Ranking from '../Ranking';
import PageNotFound from '../PageNotFound';

import Profil from '../../containers/Profil';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
import Footer from '../Footer';

import store from '../../store';

// Styles et assets
import './app.sass';
import {
  AuthService
} from '../../utils/AuthServices';

/**
 * Code
 */

const Auth = new AuthService();

const PrivateRoute = ({ component: Component }) => (
  <Route render={(props) => (
    Auth.loggedIn()
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

const App = () => (
  <section className="app">
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <PrivateRoute exact path='/profil' component={Profil} />
      <PrivateRoute exact path='/open_questions' component={OpenQuestions} />
      <PrivateRoute exact path='/lastest_results' component={LastestResults} />
      <Route exact path='/ranking' component={Ranking} />
      <Route component={PageNotFound} />
    </Switch>
  </section>
);

/**
 * Export
 */
export default App;
