/**
 * Package Import
 */
import React from 'react';
import { Alert, Card, Icon, Modal, Spin, Radio, Tag } from 'antd';
import classNames from 'classnames';

/**
 * Local import
 */
import {
  userType,
  userInterfaceType
} from '../../utils/validationPropTypes';

import ResultCharts from './resultCharts';

// Styles et assets
import 'antd/lib/card/style/css';
import 'antd/lib/modal/style/css';

/**
 * Code
 */
const AllQuestionsAnswered = ({ user, userInterface, results, displayModal }) => {
  let result;

  Object.keys(results).length === 0
    ? result = <Icon type="loading" style={{ fontSize: 24 }} spin />
    : result = <ResultCharts results={results} />;

  return (
    <div className="questionsAnswered">
      <Modal
        title="Basic Modal"
        visible={userInterface.modal.display}
        centered={true}
        onOk={displayModal}
        okText="Fermer"
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
