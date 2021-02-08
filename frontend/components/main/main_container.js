import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/welcome_actions';
import Main from './main';

const mSTP = state => {
    return {
        modal: state.ui.welcome
    }
}

const mDTP = dispatch => {
    return {
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Main);