/**
 * Import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */

// Styles et assets
import './header.sass';

/**
 * Code
 */
const Header = () => (
  <nav className="nav">
    <ul>
      <li><NavLink to="/" activeClassName='nav-activeLink'>Reply'n'Guess</NavLink></li>
      <li><NavLink to="#" activeClassName='nav-activeLink'>Questions ouvertes</NavLink></li>
      <li><NavLink to="#" activeClassName='nav-activeLink'>Derniers résultats</NavLink></li>
      <li><NavLink to="#" activeClassName='nav-activeLink'>Classement</NavLink></li>
      <li><NavLink to="#" activeClassName='nav-activeLink'>Profil</NavLink></li>
    </ul>
  </nav>
);

/**
 * Export
 */
export default Header;
