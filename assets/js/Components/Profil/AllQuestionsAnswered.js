/**
 * Package Import
 */
import React from 'react';
import { Alert, Card, Icon, Radio } from 'antd';
import classNames from 'classnames';

/**
 * Local import
 */
// import { QuestionsType } from '../../utils/validationPropTypes';

// Styles et assets
import 'antd/lib/card/style/css';

/**
 * Code
 */
const AllQuestionsAnswered = ({ user, userInterface, results }) => (
  <div className="questionsAnswered">
    {
      user.answeredQuestions.map(current => {
        const choiceLeft = classNames(
          'button',
          {
            'choiceLeft': current.user_choice === 1
          }
        );
        const choiceRight = classNames(
          'button',
          {
            'choiceRight': current.user_choice === 2
          }
        );
        const predictLeft = classNames(
          'button',
          {
            'predictLeft': current.user_predict === 1
          }
        );
        const predictRight = classNames(
          'button',
          {
            'predictRight': current.user_predict === 2
          }
        );
        return (
          <Card
            key={current.id}
            title={current.title}
          >
            <div className="answer">
              <div className="choice">
                <span className={choiceLeft}>{current.prop_1}</span>
                <span className="button textVote">Choix</span>
                <span className={choiceRight}>{current.prop_2}</span>
              </div>
              <div className="purpose">
                <span className={predictLeft}>{current.prop_1}</span>
                <span className="button textVote">Prédictions</span>
                <span className={predictRight}>{current.prop_2}</span>
              </div>
            </div>
          </Card>
        );
      })
    }
  </div>
);

/**
 * PropTypes
 */

/**
 * Export
 */
export default AllQuestionsAnswered;
