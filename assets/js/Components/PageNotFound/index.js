/**
 * Package Import
 */
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Button, Icon } from 'antd';

/**
 * Local import
 */

// Styles et assets
import './PageNotFound.css';

/**
 * Code
 */

const PageNotFound = () => {
  return (
    <React.Fragment>
      <h1>404 Error</h1>
      <p className="zoom-area"><b>Dommage !</b> Cette page ne semble plus être active <Icon type="frown" theme="outlined" /></p>
      <section className="error-container">
        <span>4</span>
        <span><span className="screen-reader-text">0</span></span>
        <span>4</span><br />
      </section>
      <div className="wrapper">
        <Button type="primary" className="link-container">
          <NavLink to="/">Retour en terrain connu</NavLink>
        </Button>
      </div>
    </React.Fragment>
  );
};

/**
 * Export
 */
export default PageNotFound;
