import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import ArticleIndex from './article_index';

const mSTP = state => {
    return {
        articles: state.entities.articles,
        indexType: 'My List'
    }
}

const mDTP = dispatch => {
    return {
        fetchArticles: () => dispatch(fetchArticles('list'))
    }
}

export default connect(mSTP, mDTP)(ArticleIndex);