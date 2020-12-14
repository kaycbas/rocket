import { connect } from 'react-redux';
import ArticleIndex from './article_index';
import { articlesArray } from '../../reducers/selectors';

const mSTP = state => {
    return {
        articles: articlesArray(state),
        indexType: 'My List',
        loading: state.ui.loading.articlesLoading
    }
}

const mDTP = dispatch => {
    return {
        fetchArticles: () => dispatch(fetchArticles('list'))
    }
}

export default connect(mSTP, mDTP)(ArticleIndex);