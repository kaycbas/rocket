import { connect } from 'react-redux';
import Main from './main';

const mSTP = state => {
    return {
        modal: state.ui.welcome
    }
}

const mDTP = dispatch => {
    return {
    }
}

export default connect(mSTP, mDTP)(Main);