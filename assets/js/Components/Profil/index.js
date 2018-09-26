/**
 * Package Import
 */
import React from 'react';
import { Redirect } from 'react-router-dom';

/**
 * Local import
 */
import Informations from '../../containers/Profil/Informations';
import AllQuestionsAnswered from '../../containers/Profil/AllQuestionsAnswered';

// Styles et assets
import './profil.sass';

/**
 * Code
 */
class Profil extends React.Component {
  render() {
    return (
      !this.props.userInterface.isConnected
        ? <Redirect to={'/login'} />
        : <div>
          {
            <React.Fragment>
              <Informations />
              <AllQuestionsAnswered />
            </React.Fragment>
          }
        </div>
    );
  }
}

/**
 * Export
 */
export default Profil;
