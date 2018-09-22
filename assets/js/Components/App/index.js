/**
 * Package Import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
import Header from '../../containers/Header';
import Home from '../../containers/Home';
import Profil from '../../containers/Profil';
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
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/profil' component={Profil} />
    </Switch>
  </section>
);

/**
 * Export
 */
export default App;
