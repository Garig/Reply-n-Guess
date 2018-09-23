/**
 * Package Import
 */
import React from 'react';
import { Card } from 'antd';

/**
 * Local import
 */
import { QuestionsType } from '../../utils/validationPropTypes';

// Styles et assets
import 'antd/lib/card/style/css';
import './dailyQuestions.sass';

/**
 * Code
 */
const DailyQuestions = ({ questions, userInterface }) => (
  <div>
    {
      questions.map(current =>
        <Card
          key={current.id}
          title={current.title}
        >
          <p>Réponse 1 : {current.prop_1}</p>
          <p>Réponse 2 : {current.prop_2}</p>
          <p>PROP 1 : {current.prop_1}</p>
          <p>PROP 2 : {current.prop_2}</p>
          <p>SUBMIT : {current.submit_date}</p>
        </Card>
      )
    }
  </div>
);

/**
 * PropTypes
 */
DailyQuestions.propTypes = {
  questions: QuestionsType.isRequired
};

/**
 * Export
 */
export default DailyQuestions;
