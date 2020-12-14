import { connect } from 'react-redux';
import { 
    createSave,
    archiveSave,
    deleteSave 
} from '../../actions/save_actions';
import ArticleIndexItem from './article_index_item';

const mSTP = (state, ownProps) => {
    // debugger
    return {
        save: state.entities.saves[ownProps.article.save_id]
    }
}

const mDTP = dispatch => {
    return {
        createSave: articleId => dispatch(createSave(articleId)),
        deleteSave: saveId => dispatch(deleteSave(saveId)),
        archiveSave: save => dispatch(archiveSave(save))
    }
}

export default connect(mSTP, mDTP)(ArticleIndexItem);