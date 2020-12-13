import { connect } from 'react-redux';
import ArticleIndexItem from './article_show';

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