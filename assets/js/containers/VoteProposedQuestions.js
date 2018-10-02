/**
 * Package Import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
// Component
import VoteProposedQuestions from '../Components/VoteProposedQuestions';

// action
import { setInputProposedQuestions, voteValidateProposedQuestions, voteDeclineProposedQuestions } from '../store/actions/questionsActions';
import { loadProposedQuestions } from '../store/actions/questionsActions';

/* === State (données) ===
 * - mapStateToProps retourne un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? ==> alors const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  proposedQuestions: state.proposedQuestions,
  userInterface: state.userInterface
});

/* === Actions ===
 */
const mapDispatchToProps = dispatch => ({
  setInputProposedQuestions: (evt) => {
    const inputName = evt.target.name;
    const id = evt.target.id;
    const value = evt.target.value;
    const payload = {
      id,
      inputName,
      value
    };
    dispatch(setInputProposedQuestions(payload));
  },
  voteValidateProposedQuestions: (evt) => {
    evt.preventDefault();
    const id = evt.target.name;
    dispatch(voteValidateProposedQuestions(id));
  },
  voteDeclineProposedQuestions: (evt) => {
    evt.preventDefault();
    const id = evt.target.name;
    dispatch(voteDeclineProposedQuestions(id));
  },
  loadProposedQuestions: () => {
    dispatch(loadProposedQuestions());
  }
});

/**
 * Export
 */
// connect(Ce dont j'ai besoin)(Composant qui en a besoin)
export default connect(
  mapStateToProps, // lecture
  mapDispatchToProps // écriture
)(VoteProposedQuestions);
