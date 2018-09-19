/**
 * Package Import
 */
import React from 'react';
import { Card } from 'antd';

/**
 * Local import
 */

// Styles et assets
import 'antd/lib/card/style/css';
import './dailyquestions.sass';

/**
 * Code
 */
class DailyQuestions extends React.Component {
  componentDidMount() {
    this.props.loadDailyQuestions();
  }
  render() {
    return (
      <div>
        {
          this.props.questions.map(current =>
            <Card
              key={current.id}
              title={current.title}
            >
              <p>PROP 1 : {current.prop_1}</p>
              <p>PROP 2 : {current.prop_2}</p>
              <p>SUBMIT : {current.submit_date}</p>
            </Card>
          )
        }
      </div>
    );
  }
};

/**
 * Export
 */
export default DailyQuestions;
