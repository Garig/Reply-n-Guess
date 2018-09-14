/**
 * Import
 */
import React from 'react';
import axios from 'axios';

/**
 * Local import
 */

// Styles et assets
import './form.sass';

/**
 * Code
 */
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {
        title: 'zeze',
        prop1: 'sdsdds',
        prop2: 'sdsdd'
      }
    }
  }

  handleChange = (evt) => {
    const { value, name } = evt.target;
    this.setState({
      questions: {
        ...this.state.questions,
        [name]: value,
      }
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const URL = 'http://localhost:8001';
    const { title, prop1, prop2 } = this.state.questions;
    axios
      .post(`${URL}/api/questions`, {
        title,
        prop1,
        prop2,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input id="title" name="title" value={this.state.questions.title} onChange={this.handleChange} type="text" autoComplete="off" />
        <input id="prop1" name="prop1" value={this.state.questions.prop1} onChange={this.handleChange} type="text" autoComplete="off" />
        <input id="prop2" name="prop2" value={this.state.questions.prop2} onChange={this.handleChange} type="text" autoComplete="off" />
        <button type="submit" onClick={this.handleSubmit} className="app-button">Ok</button>
      </form>
    );
  }
};

/**
 * Export
 */
export default Form;
