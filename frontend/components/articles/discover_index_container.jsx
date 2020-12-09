import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import ArticleIndex from './article_index';

const mSTP = state => {
    return {
        indexType: 'Discover'
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(ArticleIndex);