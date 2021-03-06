/**
 * Package Import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Home from '../Components/Home';
import { makeRedirect } from '../store/actions/actions';
import { loggedIn } from '../store/actions/userActions';
import { loadDailyQuestions } from '../store/actions/questionsActions';

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
  makeRedirect: () => {
    dispatch(makeRedirect(''));
  },
  loggedIn: () => {
    dispatch(loggedIn());
  },
  loadDailyQuestions: () => {
    dispatch(loadDailyQuestions());
  }
});

/**
 * Export
 */
// connect(Ce dont j'ai besoin)(Composant qui en a besoin)
export default connect(
  mapStateToProps, // lecture
  mapDispatchToProps // écriture
)(Home);
