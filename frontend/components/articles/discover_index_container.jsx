import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/article_actions';
import ArticleIndex from './article_index';
import { articlesArray } from '../../reducers/selectors';

const mSTP = state => {
    return {
        articles: articlesArray(state),
        indexType: 'Discover',
        loading: state.ui.loading.articlesLoading
    }
}

const mDTP = dispatch => {


    return {
        fetchArticles: () => dispatch(fetchArticles('featured')),
    }
}

export default connect(mSTP, mDTP)(ArticleIndex);