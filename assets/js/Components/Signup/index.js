/**
 * Package Import
 */
import React from 'react';
import { Form, Button, DatePicker, Radio, Input, Icon } from 'antd';

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
const Signup = ({ user, setInput, setGender, setDate, submitSignup }) => (
  <Form onSubmit={submitSignup}>
    <FormItem>
      <Input prefix={<Icon type="user" />} id="username" name="username" value={user.username} onChange={setInput} type="text" autoComplete="off" placeholder="Votre pseudo"/>
    </FormItem>
    <FormItem>
      <Input prefix={<Icon type="lock" />} id="password" name="password" value={user.password} onChange={setInput} type="text" autoComplete="off" placeholder="Votre mot de passe"/>
    </FormItem>
    <FormItem>
      <Input prefix={<Icon type="mail" />} id="email" name="email" value={user.email} onChange={setInput} type="email" autoComplete="off" placeholder="Votre email"/>
    </FormItem>
    <FormItem>
      <RadioGroup onChange={setGender} value={user.gender}>
        <Radio defaultChecked value={'homme'}>Homme</Radio>
        <Radio value={'femme'}>Femme</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem>
      <DatePicker onChange={setDate} />
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
