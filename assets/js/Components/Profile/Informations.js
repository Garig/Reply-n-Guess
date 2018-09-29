/**
 * Package Import
 */
import React from 'react';
import { Alert, Button, DatePicker, Form, Icon, Input, Radio } from 'antd';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

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
  updateProfileType
} from '../../utils/validationPropTypes';

// Styles et assets
import './profile.sass';
import 'antd/lib/date-picker/style/css';

const RadioGroup = Radio.Group;
const FormItem = Form.Item;

const Informations = ({ user, userInterface, setInput, setGender, setDate, updateProfile }) => (
  <React.Fragment>
    <Form onSubmit={updateProfile}>
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
        <RadioGroup onChange={setGender} defaultValue={user.gender} value={user.gender}>
          <Radio value={'homme'}><span className="genderRadio">Homme</span></Radio>
          <Radio value={'femme'}><span className="genderRadio">Femme</span></Radio>
        </RadioGroup>
      </FormItem>
      <FormItem>
        <Departments value={user.departments}/>
      </FormItem>
      <FormItem>
        <DatePicker onChange={setDate} placeholder="Votre date de naissance"
          defaultValue={moment(`${user.birthDate}`, 'YYYY-MM-DD')} />
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit" className="login-form-button">
    Enregistrer les modifications
        </Button>
      </FormItem>
    </Form>
  </React.Fragment>
);

/**
 * PropTypes
 */
Informations.propTypes = {
  user: userType.isRequired,
  userInterface: userInterfaceType.isRequired,
  setInput: setInputType.isRequired,
  setGender: setGenderType.isRequired,
  setDate: setDateType.isRequired,
  updateProfile: updateProfileType.isRequired
};

/**
   * Export
   */
export default Informations;
