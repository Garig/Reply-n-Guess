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
import ProposeQuestions from '../../containers/ProposeQuestions';
import LastestResults from '../LastestResults';
import Ranking from '../../containers/Ranking';
import PageNotFound from '../PageNotFound';

import Profile from '../../containers/Profile';
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
  <React.Fragment>
    <Header />
    <section className="app">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/open_questions' component={OpenQuestions} />
        <PrivateRoute exact path='/propose_questions' component={ProposeQuestions} />
        <PrivateRoute exact path='/lastest_results' component={LastestResults} />
        <Route exact path='/ranking' component={Ranking} />
        <Route component={PageNotFound} />
      </Switch>
    </section>
  </React.Fragment>
);

/**
 * Export
 */
export default App;
