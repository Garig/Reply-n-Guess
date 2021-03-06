/**
 * Package Import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import AllQuestionsAnswered from '../../Components/Profile/AllQuestionsAnswered';
import { displayModal } from '../../store/actions/actions';
import { loggedIn } from '../../store/actions/userActions';
import { getResult, setResult } from '../../store/actions/answersActions';

/* === State (données) ===
 * - mapStateToProps retourne un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? ==> alors const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  user: state.user,
  userInterface: state.userInterface,
  results: state.results
});

/* === Actions ===
 */
const mapDispatchToProps = dispatch => ({
  displayModal: (evt) => {
    if (evt.target.className.includes('ant-tag')) {
      dispatch(displayModal(true));
      const id = evt.target.getAttribute('name');
      dispatch(getResult(id));
    };
    if (evt.target.className.includes('ant-btn')) dispatch(displayModal(false));
  },
  emptyModal: () => {
    dispatch(setResult({}));
  },
  loggedIn: () => {
    dispatch(loggedIn());
  }
});

/**
 * Export
 */
// connect(Ce dont j'ai besoin)(Composant qui en a besoin)
export default connect(
  mapStateToProps, // lecture
  mapDispatchToProps // écriture
)(AllQuestionsAnswered);
