import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import { deleteHides } from '../../actions/hide_actions';
import { fetchArticles, createArticle } from '../../actions/article_actions';
import { articlesArray } from '../../reducers/selectors';
import MainNav from './main_nav';

const mSTP = state => {
    return {
        articles: articlesArray(state),
    }
}

const mDTP = dispatch => {
    return {
        signOut: () => dispatch(signOut()),
        deleteHides: () => dispatch(deleteHides()),
        fetchArticles: filter => dispatch(fetchArticles(filter)),
        createArticle: url => dispatch(createArticle(url)),
    }
}

export default connect(mSTP, mDTP)(MainNav);