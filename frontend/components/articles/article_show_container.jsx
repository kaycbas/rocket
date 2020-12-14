import { connect } from 'react-redux';
import ArticleShow from './article_show';
import { 
    createSave,
    archiveSave,
    deleteSave 
} from '../../actions/save_actions';

const mSTP = (state, ownProps) => {
    // debugger;
    const articleId = ownProps.match.params.article_id;
    const article = state.entities.articles[articleId];
    let save = null;
    if (article) {
        save = state.entities.saves[article.save_id];
    }
    return {
        article: article,
        save: save
    }
}

const mDTP = dispatch => {
    return {
        fetchArticle: id => dispatch(fetchArticle(id)),
        createSave: articleId => dispatch(createSave(articleId)),
        deleteSave: saveId => dispatch(deleteSave(saveId)),
        archiveSave: save => dispatch(archiveSave(save))
    }
}

export default connect(mSTP, mDTP)(ArticleShow);