/**
 * Package Import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import DailyQuestions from '../Components/DailyQuestions';
import { setAnswer, sendAnswer } from '../store/actions/answersActions';

/* === State (données) ===
 * - mapStateToProps retourne un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? ==> alors const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  questions: state.questions,
  user: state.user,
  userInterface: state.userInterface
});

/* === Actions ===
 */
const mapDispatchToProps = dispatch => ({
  setAnswer: (evt) => {
    const index = evt.target.name.indexOf('-');
    const questions = parseInt(evt.target.name.slice(0, index));
    const radioName = evt.target.name.slice(index + 1);
    const value = parseInt(evt.target.value, 10);
    const payload = {
      questions,
      radioName,
      value
    };
    dispatch(setAnswer(payload));
    dispatch(sendAnswer(questions));
  }
});

/**
 * Export
 */
// connect(Ce dont j'ai besoin)(Composant qui en a besoin)
export default connect(
  mapStateToProps, // lecture
  mapDispatchToProps // écriture
)(DailyQuestions);
