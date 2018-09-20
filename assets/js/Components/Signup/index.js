/**
 * Package Import
 */
import React from 'react';
import { DatePicker, Radio, Input, Icon } from 'antd';
import moment from 'moment';

/**
 * Local import
 */

// Styles et assets
import './signup.sass';
import 'antd/lib/date-picker/style/css';

const RadioGroup = Radio.Group;

/**
 * Code
 */
const Signup = ({ user, setInput, setGender, setDate, submitSignup }) => (
  <form className="signup-card" onSubmit={submitSignup}>
    Merci de remplir le formulaire ci dessous afin de procéder à votre inscription :<br/>
    <div>
      <Input prefix={<Icon type="user" />} className="signup-card-input" id="username" name="username" value={user.username} onChange={setInput} type="text" autoComplete="off" placeholder="Votre pseudo"/>
      <Input prefix={<Icon type="lock" />} className="signup-card-input" id="password" name="password" value={user.password} onChange={setInput} type="text" autoComplete="off" placeholder="Votre mot de passe"/>
      <Input prefix={<Icon type="mail" />} className="signup-card-input" id="email" name="email" value={user.email} onChange={setInput} type="email" autoComplete="off" placeholder="Votre email"/>
    </div>
    <RadioGroup className="radio-group" onChange={setGender} value={user.gender}>
      <Radio className="radioStyle" defaultChecked value={'homme'}>Homme</Radio>
      <Radio className="radioStyle" value={'femme'}>Femme</Radio>
    </RadioGroup>
    <DatePicker onChange={setDate} placeholder="Votre date de naissance" defaultValue={moment('2000-01-01', 'YYYY-MM-DD')} />
    <button type="submit" onSubmit={submitSignup}>Valider</button>
  </form>
);

/**
 * Export
 */
export default Signup;
