/**
 * Package Import
 */
import React from 'react';
import { Redirect, WithRouter } from 'react-router-dom';
import { Alert, Card, Icon, Radio, Tooltip } from 'antd';
import classNames from 'classnames';
import moment from 'moment';

/**
 * Local import
 */
// PropTypes
import {
  QuestionsType,
  userInterfaceType,
  setAnswerType
} from '../../utils/validationPropTypes';

// Styles et assets
import 'antd/lib/card/style/css';
import 'antd/lib/radio/style/css';
import './dailyQuestions.sass';

/**
 * Code
 */
const DailyQuestions = ({ questions, userInterface, setAnswer }) => (
  <div>
    {
      questions.map(current => {
        const choiceLeft = classNames(
          {
            'choiceLeft': current.answered === true && current.user_choice === 1
          }
        );
        const choiceRight = classNames(
          {
            'choiceRight': current.answered === true && current.user_choice === 2
          }
        );
        const predictLeft = classNames(
          {
            'predictLeft': current.answered === true && current.user_predict === 1
          }
        );
        const predictRight = classNames(
          {
            'predictRight': current.answered === true && current.user_predict === 2
          }
        );
        var questionsDate = moment(`${current.published_date}`).add(3, 'days');
        var now = moment();
        var days = questionsDate.diff(now, 'days');
        console.log(days);
        if (days === 0) days = 1;
        return (
          <Tooltip key={current.id} placement="rightTop" title={`Jour restant : ${days}`}>
            <Card
              key={current.id}
              title={current.title}
            >
              <div className="answer">
                <div className="choice">
                  <Radio.Group
                    onChange={setAnswer}
                    name={current.id + '-userChoice'}
                    buttonStyle="solid">
                    <Radio.Button
                      disabled={current.answered}
                      className={choiceLeft}
                      value="1">
                      {current.prop_1}
                    </Radio.Button>
                    <Radio.Button value="" disabled>
                      <Icon type="left" theme="outlined" />
                      <span className="textVote">Choix</span>
                      <Icon type="right" theme="outlined" />
                    </Radio.Button>
                    <Radio.Button
                      disabled={current.answered}
                      className={choiceRight}
                      value="2">
                      {current.prop_2}
                    </Radio.Button>
                  </Radio.Group>
                </div>
                {
                  userInterface.isConnected
                    ? <div className="purpose">
                      <Radio.Group
                        onChange={setAnswer}
                        name={current.id + '-userPredict'}
                        disabled={current.answered}
                        buttonStyle="solid">
                        <Radio.Button
                          disabled={current.answered}
                          className={predictLeft}
                          value="1">
                          {current.prop_1}
                        </Radio.Button>
                        <Radio.Button value="" disabled>
                          <Icon type="left" theme="outlined" />
                          <span className="textVote">Prédictions</span>
                          <Icon type="right" theme="outlined" />
                        </Radio.Button>
                        <Radio.Button
                          disabled={current.answered}
                          className={predictRight}
                          value="2">
                          {current.prop_2}
                        </Radio.Button>
                      </Radio.Group>
                    </div>
                    : null
                }
                {
                  current.answered
                    ? <Alert message="Vous avez répondu à cette question" type="success" showIcon />
                    : null
                }
              </div>
            </Card>
          </Tooltip>
        );
      })
    }
  </div>
);

/**
 * PropTypes
 */
DailyQuestions.propTypes = {
  questions: QuestionsType.isRequired,
  userInterface: userInterfaceType.isRequired,
  setAnswer: setAnswerType.isRequired
};

/**
 * Export
 */
export default DailyQuestions;
