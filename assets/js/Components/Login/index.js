/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */

// Styles et assets
import './login.sass';

/**
 * Code
 */
const Login = () => (
  <form className="login-card">
    Login
    <input id="pseudo" name="pseudo" value={null} onChange={() => {}} type="text" autoComplete="off" />
  </form>
);

/**
 * Export
 */
export default Login;
