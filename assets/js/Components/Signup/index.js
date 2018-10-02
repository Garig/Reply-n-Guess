/**
 * Package Import
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Alert, Button, DatePicker, Form, Icon, Input, Radio } from 'antd';
import moment from 'moment';

/**
 * Local import
 */
// containers
import Departments from '../../containers/Departments';

// PropTypes
import {
  userType,
  userInterfaceType,
  setInputType,
  setGenderType,
  setDateType,
  submitSignupType
} from '../../utils/validationPropTypes';

// Styles et assets
import './signup.sass';
import 'antd/lib/date-picker/style/css';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

/**
 * Code
 */
const Signup = ({ user, userInterface, setInput, setGender, setDate, submitSignup }) => (
  userInterface.redirection === '/login'
    ? <Redirect to={'/login'} />
    : <Form onSubmit={submitSignup}>
      {
        userInterface.alert.display
          ? <Alert message={userInterface.alert.message} type={userInterface.alert.type} showIcon />
          : null
      }
      <FormItem>
        <Input
          suffix={<Icon type="user" />}
          id="username" name="username" type="text"
          value={user.username} onChange={setInput}
          autoComplete="off" placeholder="Votre pseudo"/>
      </FormItem>
      <FormItem>
        <Input
          suffix={<Icon type="lock" />}
          id="password" name="password" type="password"
          value={user.password} onChange={setInput}
          autoComplete="off" placeholder="Votre mot de passe"/>
      </FormItem>
      <FormItem>
        <Input
          suffix={<Icon type="lock" />}
          id="passwordConfirm" name="passwordConfirm" type="password"
          value={user.passwordConfirm} onChange={setInput}
          autoComplete="off" placeholder="Confirmer votre mot de passe"/>
      </FormItem>
      <FormItem>
        <Input
          suffix={<Icon type="mail" />}
          id="email" name="email" type="text"
          value={user.email} onChange={setInput}
          autoComplete="off" placeholder="Votre email"/>
      </FormItem>
      <FormItem>
        <RadioGroup onChange={setGender} value={user.gender}>
          <Radio className="genderRadio" defaultChecked value={'homme'}>Homme</Radio>
          <Radio className="genderRadio" value={'femme'}>Femme</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem>
        <Departments />
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
 * PropTypes
 */
Signup.propTypes = {
  user: userType.isRequired,
  userInterface: userInterfaceType.isRequired,
  setInput: setInputType.isRequired,
  setGender: setGenderType.isRequired,
  setDate: setDateType.isRequired,
  submitSignup: submitSignupType.isRequired
};

/**
 * Export
 */
export default Signup;
