/**
 * Package Import
 */
import React from 'react';
import { Tooltip, Progress } from 'antd';

/**
 * Local import
 */
import 'antd/lib/progress/style/css';

/**
 * Code
 */
const ResultCharts = (results) => {
  const result = results.results;
  return (
    <div>
      <h3>Resultats généraux</h3>
      <Tooltip title={`${result.percAnswer1}% choix 1 - ${result.percAnswer2}% choix 2`} placement="topRight">
        <Progress successPercent={result.percAnswer1} showInfo={false} />
      </Tooltip>
      <h3>Resultats pour les hommes</h3>
      <Tooltip title={`${result.percMenAnswer1}% choix 1 - ${result.percMenAnswer2}% choix 2`} placement="topRight">
        <Progress successPercent={result.percMenAnswer1} showInfo={false} />
      </Tooltip>
      <h3>Resultats pour les femmes</h3>
      <Tooltip title={`${result.percWomenAnswer1}% choix 1 - ${result.percWomenAnswer2}% choix 2`} placement="topRight">
        <Progress successPercent={result.percWomenAnswer1} showInfo={false} />
      </Tooltip>
    </div>
  );
};

/**
 * PropTypes
 */

/**
 * Export
 */
export default ResultCharts;
