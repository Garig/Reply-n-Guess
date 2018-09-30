/**
 * Package Import
 */
import React from 'react';
import { Button, Card, Icon, Modal, Spin, Tag, Alert, Divider, Radio, Tooltip } from 'antd';

import classNames from 'classnames';

/**
 * Local import
 */
import {
  userType,
  userInterfaceType
} from '../../utils/validationPropTypes';

import ResultCharts from './ResultCharts';

// Styles et assets
import 'antd/lib/card/style/css';
import 'antd/lib/modal/style/css';

/**
 * Code
 */
const AllQuestionsAnswered = ({ user, userInterface, results, displayModal, emptyModal }) => {
  let result;

  Object.keys(results).length === 0
    ? result = <Icon type="loading" style={{ fontSize: 24 }} spin />
    : result = <ResultCharts results={results} />;

  return (
    <div className="questionsAnswered">
      <Modal
        title="Resultats"
        visible={userInterface.modal.display}
        centered={true}
        closable={false}
        footer={[
          <Button key="back" onClick={displayModal}>Retour</Button>
        ]}
        afterClose={emptyModal}
        wrapClassName="modal"
      >
        {result}
      </Modal>
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
              extra={<Tag color="geekblue" className="tag" name={current.id} onClick={displayModal} >Resultats</Tag>}
              className="true"
            >
              <div className="answer">
                <div className="choice">
                  <Radio.Group
                    disabled={true}>
                    <Radio.Button
                      className={choiceLeft} >
                      {current.prop_1}
                    </Radio.Button>
                    <Radio.Button
                      className={choiceRight} >
                      {current.prop_2}
                    </Radio.Button>
                  </Radio.Group>
                </div>
                <div className="purpose">
                  <div className="divider">Choix <hr /> Prédiction</div>
                  <Radio.Group
                    disabled={true} >
                    <Radio.Button
                      className={predictLeft}>
                      {current.prop_1}
                    </Radio.Button>
                    <Radio.Button
                      className={predictRight} >
                      {current.prop_2}
                    </Radio.Button>
                  </Radio.Group>
                </div>
              </div>
            </Card>
          );
        })
      }
    </div>
  );
};

/**
 * PropTypes
 */
AllQuestionsAnswered.propTypes = {
  user: userType.isRequired,
  userInterface: userInterfaceType.isRequired
};

/**
 * Export
 */
export default AllQuestionsAnswered;
