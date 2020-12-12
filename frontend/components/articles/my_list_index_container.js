import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import ArticleIndex from './article_index';
import { articlesArray } from '../../reducers/selectors';

const mSTP = state => {
    return {
        articles: articlesArray(state),
        indexType: 'My List'
    }
}

const mDTP = dispatch => {
    return {
        fetchArticles: () => dispatch(fetchArticles())
    }
}

export default connect(mSTP, mDTP)(ArticleIndex);