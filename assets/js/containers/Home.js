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

/* === State (données) ===
 * - mapStateToProps retourne un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? ==> alors const mapStateToProps = null;
 */
const mapStateToProps = state => ({});

/* === Actions ===
 */
const mapDispatchToProps = dispatch => ({
  makeRedirect: () => {
    dispatch(makeRedirect(''));
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
)(Home);
