/**
 * Package Import
 */
import React from 'react';
import { Table, Divider, Tag } from 'antd';

/**
 * Local import
 */

// Styles et assets
import './ranking.sass';
import 'antd/lib/table/style/css';

/**
 * Code
 */
const Ranking = ({ user, userInterface, ranking }) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'username',
    key: 'name'
  }, {
    title: 'Score',
    dataIndex: 'score',
    key: 'score'
  }, {
    title: 'Nb de prédiction juste',
    dataIndex: 'total_accurate_answers',
    key: 'total_accurate_answers'
  }, {
    title: '% prédiction juste',
    dataIndex: 'perc_accuracy_answers',
    key: 'perc_accuracy_answers'
  }, {
    title: 'Nb prédiction totale',
    dataIndex: 'total_answers',
    key: 'total_answers'
  }];
  ranking.map(current => { current.key = current.user_id; });
  console.log(ranking);
  return (
    <div><Table columns={columns} dataSource={ranking} /></div>
  );
};

/**
 * Export
 */
export default Ranking;
