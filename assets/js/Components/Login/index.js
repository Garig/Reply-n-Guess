/**
 * Package Import
 */
import React from 'react';
import { Form, Button, Input, Icon, Alert } from 'antd';

/**
 * Local import
 */
import {
  userType,
  userInterfaceType,
  setInputType,
  submitLoginType
} from '../../utils/validationPropTypes';

// Styles et assets
import './login.sass';
import 'antd/lib/alert/style/css';

const FormItem = Form.Item;

/**
 * Code
 */
const Login = ({ user, userInterface, setInput, submitLogin }) => (
  <Form className="login-card" onSubmit={submitLogin}>
    {
      userInterface.alert.display
        ? <Alert message={userInterface.alert.message} type={userInterface.alert.type} showIcon />
        : null
    }
    <FormItem>
      <Input
        prefix={<Icon type="user" />}
        className="signup-card-input"
        id="username" name="username" type="text"
        value={user.username} onChange={setInput}
        autoComplete="off" placeholder="Votre pseudo"/>
    </FormItem>
    <FormItem>
      <Input
        prefix={<Icon type="lock" />}
        className="signup-card-input"
        id="password" name="password" type="password"
        value={user.password} onChange={setInput}
        autoComplete="off" placeholder="Votre mot de passe"/>
    </FormItem>
    <FormItem>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
    </FormItem>
  </Form>
);

/**
 * PropTypes
 */
Login.propTypes = {
  user: userType.isRequired,
  userInterface: userInterfaceType.isRequired,
  setInput: setInputType.isRequired,
  submitLogin: submitLoginType.isRequired
};

/**
 * Export
 */
export default Login;
