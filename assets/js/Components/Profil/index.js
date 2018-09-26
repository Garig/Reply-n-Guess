/**
 * Package Import
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Tabs } from 'antd';

/**
 * Local import
 */
import Informations from '../../containers/Profil/Informations';
import AllQuestionsAnswered from '../../containers/Profil/AllQuestionsAnswered';

// Styles et assets
import './profil.sass';
const TabPane = Tabs.TabPane;

/**
 * Code
 */
class Profil extends React.Component {
  render() {
    return (
      !this.props.userInterface.isConnected
        ? <Redirect to={'/login'} />
        : <Tabs defaultActiveKey="1">
          <TabPane tab="Informations" key="1"><Informations /></TabPane>
          <TabPane tab="Toutes vos réponses" key="2"><AllQuestionsAnswered /></TabPane>
        </Tabs>
    );
  }
}

/**
 * Export
 */
export default Profil;
