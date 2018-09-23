/**
 * Package Import
 */
import React from 'react';
import { Redirect, WithRouter } from 'react-router-dom';
import { Card, Icon, Radio } from 'antd';

/**
 * Local import
 */
import { QuestionsType } from '../../utils/validationPropTypes';

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
      questions.map(current =>
        <Card
          key={current.id}
          title={current.title}
          // onClick={userInterface.isConnected
          //   ?  : <Redirect to='/login' />}
        >
          <React.Fragment>
            <div className="answer">
              <div className="choice">
                <Radio.Group onChange={setAnswer} name={current.id + '-userChoice'} buttonStyle="solid">
                  <Radio.Button value="1">{current.prop_1}</Radio.Button>
                  <Radio.Button value="" disabled>
                    <Icon type="left" theme="outlined" />
                    <span className="textVote">Choix</span>
                    <Icon type="right" theme="outlined" />
                  </Radio.Button>
                  <Radio.Button value="2">{current.prop_2}</Radio.Button>
                </Radio.Group>
              </div>
              <div className="purpose">
                <Radio.Group onChange={setAnswer} name={current.id + '-userPredict'} buttonStyle="solid">
                  <Radio.Button value="1">{current.prop_1}</Radio.Button>
                  <Radio.Button value="" disabled>
                    <Icon type="left" theme="outlined" />
                    <span className="textVote">Prédictions</span>
                    <Icon type="right" theme="outlined" />
                  </Radio.Button>
                  <Radio.Button value="2">{current.prop_2}</Radio.Button>
                </Radio.Group>
              </div>
            </div>
            <p>SUBMIT : {current.submit_date}</p>
          </React.Fragment>
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
