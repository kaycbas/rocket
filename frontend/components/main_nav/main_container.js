import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import Main from './main';

const mSTP = state => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        
    }
}

export default connect(mSTP, mDTP)(Main);