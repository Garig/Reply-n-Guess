/**
 * Package Import
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Tabs } from 'antd';

/**
 * Local import
 */
// Component
import Informations from '../../containers/Profile/Informations';
import AllQuestionsAnswered from '../../containers/Profile/AllQuestionsAnswered';

// PropTypes
import {
  QuestionsType,
  userInterfaceType,
  setAnswerType
} from '../../utils/validationPropTypes';

// Styles et assets
import './profile.sass';
const TabPane = Tabs.TabPane;

/**
 * Code
 */
class Profile extends React.Component {
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
 * PropTypes
 */
Profile.propTypes = {
  userInterface: userInterfaceType.isRequired,
};

/**
 * Export
 */
export default Profile;
