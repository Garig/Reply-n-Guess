/**
 * Package Import
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Alert, Button, Card, Form, Icon, Input } from 'antd';

/**
 * Local import
 */
// PropTypes
import {
  userInterfaceType,
  setInputProposedQuestionsType,
  voteValidateProposedQuestionsType,
  voteDeclineProposedQuestionsType
} from '../../utils/validationPropTypes';

// Styles et assets
import './voteProposedQuestions.sass';

const FormItem = Form.Item;

/**
 * Code
 */
const VoteProposedQuestions = ({ proposedQuestions, userInterface, voteValidateProposedQuestions, voteDeclineProposedQuestions }) => (
  <div>
    {
      Object.keys(proposedQuestions).map((valueKey, index) => {
        let current = proposedQuestions[valueKey];
        return (
          <Card key={current.id} >
            <Form className="proposedQuestions">
              {
                userInterface.alert.display
                  ? <Alert message={userInterface.alert.message} type={userInterface.alert.type} showIcon />
                  : null
              }
              <FormItem>
                <Input className="title"
                  suffix={<Icon type="question" theme="outlined" />}
                  id={current.id} name="title" type="text"
                  value={current.title} onChange={() => {}}
                  autoComplete="off" placeholder="Intitulé de la question" />
              </FormItem>
              <FormItem>
                <Input className="prop1"
                  id={current.id} name="prop_1" type="text"
                  value={current.prop_1} onChange={() => {}}
                  autoComplete="off" placeholder="Proposition 1" />
                <Input className="prop2"
                  id={current.id} name="prop_2" type="text"
                  value={current.prop_2} onChange={() => {}}
                  autoComplete="off" placeholder="Proposition 2" />
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="purpose-form-button" name={current.id} onClick={voteValidateProposedQuestions}>
                  Modifier / Valider la question
                </Button>
                <Button type="primary" htmlType="submit" className="purpose-form-button" name={current.id} onClick={voteDeclineProposedQuestions}>
                  Refuser la question
                </Button>
              </FormItem>
            </Form>
          </Card>
        );
      })
    }
  </div>
);

/**
 * PropTypes
 */
VoteProposedQuestions.propTypes = {
  voteValidateProposedQuestions: voteValidateProposedQuestionsType.isRequired,
  voteDeclineProposedQuestions: voteDeclineProposedQuestionsType.isRequired,
  userInterface: userInterfaceType.isRequired,
  setInputProposedQuestions: setInputProposedQuestionsType.isRequired
};

/**
 * Export
 */
export default VoteProposedQuestions;
