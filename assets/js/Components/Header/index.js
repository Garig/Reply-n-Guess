/**
 * Import
 */
import React from 'react';

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
      <li><a href="/">Reply'n'Guess</a></li>
      <li><a href="#">Questions ouvertes</a></li>
      <li><a href="#">Derniers résultats</a></li>
      <li><a href="#">Classement</a></li>
      <li><a href="#">Profil</a></li>
    </ul>
  </nav>
);

/**
 * Export
 */
export default Header;
