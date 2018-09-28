/**
 * Package Import
 */
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Icon, Menu } from 'antd';

/**
 * Local import
 */
import {
  userInterfaceType,
  disconnectType
} from '../../utils/validationPropTypes';

// Styles et assets
import 'antd/lib/menu/style/css';
import './header.sass';

/**
 * Code
 */
const Header = ({ userInterface, disconnect }) => (
  <header className="headerNav">
    <Menu
      mode="horizontal"
      selectedKeys={[window.location.pathname]}
    >
      <Menu.Item key="/">
        <NavLink to="/">Reply'n'Guess</NavLink>
      </Menu.Item>
      <Menu.Item key="/open_questions">
        <NavLink to="/open_questions">Questions ouvertes</NavLink>
      </Menu.Item>
      <Menu.Item key="/lastest_results">
        <NavLink to="/lastest_results">Derniers résultats</NavLink>
      </Menu.Item>
      <Menu.Item key="/ranking">
        <NavLink to="/ranking">Classement</NavLink>
      </Menu.Item>
      {
        userInterface.isConnected
          ? <Menu.Item key="/profile"><NavLink to="/profile">Profil</NavLink></Menu.Item>
          : <Menu.Item key="/login"><NavLink to="/login">Connexion</NavLink></Menu.Item>
      }
      {
        userInterface.isConnected
          ? <Menu.Item key="/logout"><Icon type="poweroff" theme="outlined" onClick={disconnect} /></Menu.Item>
          : <Menu.Item key="/signup"><NavLink to="/signup">Inscription</NavLink></Menu.Item>
      }
    </Menu>
  </header>
);

/**
 * PropTypes
 */
Header.propTypes = {
  userInterface: userInterfaceType.isRequired,
  disconnect: disconnectType.isRequired
};
/**
 * Export
 */
export default Header;
