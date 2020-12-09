import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import MainNav from './main_nav';

const mSTP = state => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mSTP, mDTP)(MainNav);