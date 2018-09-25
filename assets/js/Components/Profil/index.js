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

import Informations from '../../containers/Informations';
/**
 * Code
 */
const Profil = ({ user, userInterface, questions }) => (
  !userInterface.isConnected
    ? <Redirect to={'/login'} />
    : <div>
      {
        <Informations />
      }
    </div>
);

/**
 * Export
 */
export default Profil;
