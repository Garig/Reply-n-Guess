/**
 * Package Import
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Alert, Button, Form, Icon, Input } from 'antd';

/**
 * Local import
 */
// PropTypes
// import {
//   userType,
//   userInterfaceType,
//   setInputType,
//   submitProposeType
// } from '../../utils/validationPropTypes';

// Styles et assets
import './proposeQuestions.sass';

const FormItem = Form.Item;

/**
 * Code
 */
const ProposeQuestions = ({ user, userInterface, setInput, submitPropose }) => {
  console.log('user');
  console.log(user);
  console.log('user.ProposeQuestions');

  return (
    <Form onSubmit={submitPropose}>
      <FormItem>
        <Input className="title"
          suffix={<Icon type="question" theme="outlined" />}
          id="title" name="title" type="text"
          onChange={setInput}
          autoComplete="off" placeholder="Intitulé de la question" />
      </FormItem>
      <FormItem>
        <Input className="prop1"
          id="prop1" name="prop1" type="text"
          onChange={setInput}
          autoComplete="off" placeholder="Proposition 1" />
        <Input className="prop2"
          id="prop2" name="prop2" type="text"
          onChange={setInput}
          autoComplete="off" placeholder="Proposition 2" />
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit" className="purpose-form-button">
          Proposer ma question
        </Button>
      </FormItem>
    </Form>
  );
};

/**
 * Export
 */
export default ProposeQuestions;
