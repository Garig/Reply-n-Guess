/**
 * Package Import
 */
import React from 'react';
import { Redirect } from 'react-router-dom';

/**
 * Local import
 */

// Styles et assets
import './profil.sass';

/**
 * Code
 */
const Profil = ({ user, userInterface, questions, results }) => (
  userInterface.isConnected
    ? <div>Profil</div>
    : <Redirect to={'/login'} />
);

/**
 * Export
 */
export default Profil;
