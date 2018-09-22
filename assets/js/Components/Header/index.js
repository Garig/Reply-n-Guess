/**
 * Package Import
 */
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

/**
 * Local import
 */

// Styles et assets
import 'antd/lib/menu/style/css';
import './header.sass';

/**
 * Code
 */
const Header = ({ userInterface }) => (
  <header>
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
          ? <Menu.Item key="/profil"><NavLink to="/profil">Profil</NavLink></Menu.Item>
          : <Menu.Item key="/login"><NavLink to="/login">Connexion</NavLink></Menu.Item>
      }
      {
        userInterface.isConnected
          ? <Menu.Item key="/logout"><NavLink to="/logout">Logout</NavLink></Menu.Item>
          : <Menu.Item key="/signup"><NavLink to="/signup">Inscription</NavLink></Menu.Item>
      }
    </Menu>
  </header>
);

/**
 * Export
 */
export default Header;
