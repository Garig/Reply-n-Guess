/**
 * Npm import
 */
import { connect } from 'react-redux';
import { setInput } from '../store/actions';

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
  user: state.user
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
