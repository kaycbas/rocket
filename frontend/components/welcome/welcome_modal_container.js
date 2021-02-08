import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/welcome_actions';
import WelcomeModal from './welcome_modal';

const mSTP = state => {
    return {
        
    }
}

const mDTP = dispatch => {
    return {
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(WelcomeModal);