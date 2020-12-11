import { connect } from 'react-redux';
import ArticleShow from './article_show';
// import { fetchArticles } from '../../actions/article_actions';
// import { articlesArray } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
    return {
        article: state.entities.articles[ownProps.match.params.article_id]
    }
}

const mDTP = dispatch => {
    return {
        fetchArticle: id => dispatch(fetchArticle(id))
    }
}

export default connect(mSTP, mDTP)(ArticleShow);