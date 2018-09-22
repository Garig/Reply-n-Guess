/**
 * Package Import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Header from '../Components/Header';
import { disconnect } from '../store/actions/userActions';

/* === State (données) ===
 * - mapStateToProps retourne un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? ==> alors const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  userInterface: state.userInterface
});

/* === Actions ===
 */
const mapDispatchToProps = dispatch => ({
  disconnect: () => {
    dispatch(disconnect());
  }
});

/**
 * Export
 */
// connect(Ce dont j'ai besoin)(Composant qui en a besoin)
export default connect(
  mapStateToProps, // lecture
  mapDispatchToProps // écriture
)(Header);
