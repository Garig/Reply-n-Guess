/**
 * Npm import
 */
import { connect } from 'react-redux';
import { doSomething } from '../store/actions';

/**
 * Local import
 */
import App from '../Components/App';

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
  doSomething: () => {
    dispatch(doSomething());
  }
});

/**
 * Export
 */
// connect(Ce dont j'ai besoin)(Composant qui en a besoin)
export default connect(
  mapStateToProps, // lecture
  mapDispatchToProps // écriture
)(App);
