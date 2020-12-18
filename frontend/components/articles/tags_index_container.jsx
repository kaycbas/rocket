import { connect } from 'react-redux';
import ArticleIndex from './article_index';
import { articlesArray } from '../../reducers/selectors';
import { fetchArticles } from "../../actions/article_actions";

const mSTP = (state, ownProps) => {
    const label = ownProps.match.params.label;
    return {
        articles: articlesArray(state),
        indexType: label,
        loading: state.ui.loading.articlesLoading,
        label: label
    }
}

const mDTP = (dispatch, ownProps) => {
    const label = ownProps.match.params.label;
    return {
        fetchArticles: () => dispatch(fetchArticles(`tag:${label}`))
    }
}

export default connect(mSTP, mDTP)(ArticleIndex);