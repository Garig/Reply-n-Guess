/**
 * Package Import
 */
import React from 'react';
import { Input, Icon } from 'antd';

/**
 * Local import
 */

// Styles et assets
import './login.sass';
import 'antd/lib/date-picker/style/css';

/**
 * Code
 */
const Login = ({ user, setInput, submitLogin }) => (
  <form className="login-card" onSubmit={submitLogin}>
    <div>
      <Input prefix={<Icon type="user" />} className="login-card-input" id="pseudo" name="username" value={user.username} onChange={setInput} type="text" autoComplete="off" placeholder="Votre pseudo"/>
      <Input prefix={<Icon type="lock" />} className="login-card-input" id="password" name="password" value={user.password} onChange={setInput} type="text" autoComplete="off" placeholder="Votre mot de passe"/>
      <button type="submit" onSubmit={submitLogin}>Valider</button>
    </div>
    
  </form>
);

/**
 * Export
 */
export default Login;
