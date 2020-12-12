import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import { fetchArticles } from '../../actions/article_actions';
import { createSave, deleteSave } from '../../actions/save_actions';
import ArticleIndex from './article_index';
import { articlesArray } from '../../reducers/selectors';

const mSTP = state => {
    return {
        articles: articlesArray(state),
        indexType: 'Discover'
    }
}

const mDTP = dispatch => {


    return {
        fetchArticles: () => dispatch(fetchArticles('featured')),
        createSave: articleId => dispatch(createSave(articleId)),
        deleteSave: saveId => dispatch(deleteSave(saveId))
    }
}

export default connect(mSTP, mDTP)(ArticleIndex);