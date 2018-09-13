/**
 * Import
 */
import React from 'react';
import axios from 'axios';

/**
 * Local import
 */

// Styles et assets
// import './app.sass';

/**
 * Code
 */
class DailyQuestions extends React.Component {
  state = {
    questions : []
  }
  componentWillMount() {
    const URL = 'http://localhost:8001';
    axios
      .get(`${URL}/test`)
      .then(response => {
        // Check si le state est bien vide
        console.log(this.state.questions)
        this.setState({
          questions: [...this.state.questions, response.data]
        })
        // Check le state est bien mis a jour
        console.log(this.state.questions)
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        <ul>
          {
            // Affichage des questions
            this.state.questions.map(current => <li key={current.id}>{current.title}</li>)
          }
        </ul>
      </div>
    );
  }
};

/**
 * Export
 */
export default DailyQuestions;
