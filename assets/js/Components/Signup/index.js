/**
 * Import
 */
import React from 'react';
import { DatePicker } from 'antd';

/**
 * Local import
 */

// Styles et assets
import './signup.sass';
import 'antd/lib/date-picker/style/css';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
/**
 * Code
 */
const Signup = ({ user, setInput }) => (
  <form className="signup-card">
    Signup :<br/>
    <div>
      <input id="username" name="username" value={user.username} onChange={setInput} type="text" autoComplete="off" placeholder="Votre pseudo"/>
      <input id="password" name="password" value={user.password} onChange={setInput} type="text" autoComplete="off" placeholder="Votre mot de passe"/>
      <input id="email" name="email" value={user.email} onChange={setInput} type="email" autoComplete="off" placeholder="Votre email"/>
    </div>
    <DatePicker onChange={onChange} />
  </form>
);

/**
 * Export
 */
export default Signup;
