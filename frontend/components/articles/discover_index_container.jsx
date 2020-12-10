import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import { fetchArticles } from '../../actions/article_actions';
import ArticleIndex from './article_index';

const mSTP = state => {
    // debugger;
    return {
        articles: state.entities.articles,
        indexType: 'Discover'
    }
}

const mDTP = dispatch => {
    return {
        fetchArticles: () => dispatch(fetchArticles('featured'))
    }
}

export default connect(mSTP, mDTP)(ArticleIndex);