/**
 * Package Import
 */
import { connect } from 'react-redux';
import { setGender, setDate, submitSignup } from '../store/actions/userActions';
import { setInput } from '../store/actions/actions';

/**
 * Local import
 */
import Signup from '../Components/Signup';

/* === State (données) ===
 * - mapStateToProps retourne un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? ==> alors const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  user: state.user,
  userInterface: state.userInterface
});

/* === Actions ===
 */
const mapDispatchToProps = dispatch => ({
  setInput: (evt) => {
    const inputName = evt.target.getAttribute('name');
    const value = evt.target.value;
    const payload = {
      inputName,
      value
    };
    dispatch(setInput(payload));
  },
  setDate: (date, dateString) => {
    dispatch(setDate(dateString));
  },
  setGender: (evt) => {
    dispatch(setGender(evt.target.value));
  },
  submitSignup: (evt) => {
    evt.preventDefault();
    dispatch(submitSignup());
  }
});

/**
 * Export
 */
// connect(Ce dont j'ai besoin)(Composant qui en a besoin)
export default connect(
  mapStateToProps, // lecture
  mapDispatchToProps // écriture
)(Signup);
