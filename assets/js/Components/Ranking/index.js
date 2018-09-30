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
