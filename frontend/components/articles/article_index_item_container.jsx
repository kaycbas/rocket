import { connect } from 'react-redux';
import { 
    createSave,
    archiveSave,
    unArchiveSave,
    deleteSave
} from '../../actions/save_actions';
import ArticleIndexItem from './article_index_item';

const mSTP = (state, ownProps) => {
    return {
        save: state.entities.saves[ownProps.article.save_id]
    }
}

const mDTP = dispatch => {
    return {
        createSave: articleId => dispatch(createSave(articleId)),
        deleteSave: saveId => dispatch(deleteSave(saveId)),
        archiveSave: save => dispatch(archiveSave(save)),
        unArchiveSave: save => dispatch(unArchiveSave(save))
    }
}

export default connect(mSTP, mDTP)(ArticleIndexItem);