import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import ArticleIndex from './article_index';

const mSTP = state => {
    return {
        indexType: 'My List'
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(ArticleIndex);