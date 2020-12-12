import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import ArticleIndex from './article_index';
import { articlesArray } from '../../reducers/selectors';
import { deleteSave } from '../../actions/save_actions';

const mSTP = state => {
    return {
        articles: articlesArray(state),
        indexType: 'My List'
    }
}

const mDTP = dispatch => {
    return {
        fetchArticles: () => dispatch(fetchArticles()),
        deleteSave: saveId => dispatch(deleteSave(saveId))
    }
}

export default connect(mSTP, mDTP)(ArticleIndex);