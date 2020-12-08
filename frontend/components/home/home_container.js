import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import Home from './home';

const mSTP = state => {
    return {
        
    }
}

const mDTP = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mSTP, mDTP)(Home);