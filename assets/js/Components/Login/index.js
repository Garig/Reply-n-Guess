/**
 * Package Import
 */
import React from 'react';
import { Form, Button, Input, Icon } from 'antd';

/**
 * Local import
 */

// Styles et assets
import './login.sass';

import 'antd/lib/date-picker/style/css';

const FormItem = Form.Item;

/**
 * Code
 */
const Login = ({ user, setInput, submitLogin }) => (
  <Form className="login-card" onSubmit={submitLogin}>
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
 * Export
 */
export default Login;
