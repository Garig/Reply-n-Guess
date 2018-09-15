/**
 * Npm import
 */
import { connect } from 'react-redux';
import { loadDailyQuestions } from '../store/actions';

/**
 * Local import
 */
import DailyQuestions from '../Components/DailyQuestions';

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
)(DailyQuestions);
