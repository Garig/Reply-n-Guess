/**
 * Package Import
 */
import React from 'react';
import { Redirect, WithRouter } from 'react-router-dom';
import { Icon, Select } from 'antd';
import classNames from 'classnames';

/**
 * Local import
 */
// PropTypes
import {
  setDepartmentType
} from '../../utils/validationPropTypes';

// Styles et assets
import 'antd/lib/select/style/css';
import './departments.sass';
import {departmentsList} from './departmentsList';

const Option = Select.Option;

/**
 * Code
 */
const Departments = ({ value, setDepartment }) => {
  return (
    <Select
      style = {{ width: '100%' }}
      placeholder = {value ? value : 'Votre département'}
      onChange = {setDepartment}
      defaultValue = {value}
    >
      {
        departmentsList.map(current => {
          return (
            <Option key={current.id} value={current.id}>{current.code} : {current.name}</Option>
          );
        })
      }
    </Select>
  )
};

/**
 * PropTypes
 */
Departments.propTypes = {
  setDepartment: setDepartmentType.isRequired
};

/**
 * Export
 */
export default Departments;
