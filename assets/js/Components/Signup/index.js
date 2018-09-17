/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */

// Styles et assets
import './signup.sass';

/**
 * Code
 */
const Signup = () => (
  <form className="signup-card">
    Signup
    <input id="username" name="username" value={null} onChange={() => {}} type="text" autoComplete="off" />
    <input id="password" name="password" value={null} onChange={() => {}} type="text" autoComplete="off" />
    <input id="email" name="email" value={null} onChange={() => {}} type="text" autoComplete="off" />
  </form>
);

/**
 * Export
 */
export default Signup;
