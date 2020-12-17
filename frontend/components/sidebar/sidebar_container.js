import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { labelsArray } from '../../reducers/selectors';

const mSTP = state => {
    return {
        labels: labelsArray(state),
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(Sidebar);