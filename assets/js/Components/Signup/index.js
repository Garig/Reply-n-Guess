/**
 * Package Import
 */
import React from 'react';
import { Form, Button, DatePicker, Radio, Input, Icon, Alert } from 'antd';
import moment from 'moment';

/**
 * Local import
 */

// Styles et assets
import './signup.sass';
import 'antd/lib/date-picker/style/css';

const RadioGroup = Radio.Group;
const FormItem = Form.Item;

/**
 * Code
 */
const Signup = ({ user, userInterface, setInput, setGender, setDate, submitSignup }) => (
  <Form onSubmit={submitSignup}>
    {
      userInterface.alert.display
        ? <Alert message={userInterface.alert.message} type={userInterface.alert.type} showIcon />
        : null
    }
    <FormItem>
      <Input
        prefix={<Icon type="user" />}
        id="username" name="username" type="text"
        value={user.username} onChange={setInput}
        autoComplete="off" placeholder="Votre pseudo"/>
    </FormItem>
    <FormItem>
      <Input
        prefix={<Icon type="lock" />}
        id="password" name="password" type="password"
        value={user.password} onChange={setInput}
        autoComplete="off" placeholder="Votre mot de passe"/>
    </FormItem>
    <FormItem>
      <Input
        prefix={<Icon type="lock" />}
        id="passwordConfirm" name="passwordConfirm" type="password"
        value={user.passwordConfirm} onChange={setInput}
        autoComplete="off" placeholder="Confirmer votre mot de passe"/>
    </FormItem>
    <FormItem>
      <Input
        prefix={<Icon type="mail" />}
        id="email" name="email" type="text"
        value={user.email} onChange={setInput}
        autoComplete="off" placeholder="Votre email"/>
    </FormItem>
    <FormItem>
      <RadioGroup onChange={setGender} value={user.gender}>
        <Radio defaultChecked value={'homme'}>Homme</Radio>
        <Radio value={'femme'}>Femme</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem>
      <DatePicker onChange={setDate} placeholder="Votre date de naissance" defaultValue={moment('2000-01-01', 'YYYY-MM-DD')} />
    </FormItem>
    <FormItem>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Sign up
      </Button>
    </FormItem>
  </Form>
);

/**
 * Export
 */
export default Signup;
