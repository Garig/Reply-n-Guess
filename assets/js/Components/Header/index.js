/**
 * Package Import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
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

const Header = () => (
  <header>
    <Menu
      mode="horizontal"
    >
      <Menu.Item>
        <NavLink to="/">Reply'n'Guess</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/open_questions">Questions ouvertes</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="#">Derniers résultats</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/ranking">Classement</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/login">Connexion</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/signup">Inscription</NavLink>
      </Menu.Item>
    </Menu>
  </header>
);

/**
 * Export
 */
export default Header;
