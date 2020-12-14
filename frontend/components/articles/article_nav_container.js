import { connect } from 'react-redux';
import ArticleNav from './article_nav';
import { 
    createSave,
    archiveSave,
    deleteSave 
} from '../../actions/save_actions';

const mSTP = (state, ownProps) => {
    return {
    }
}

const mDTP = dispatch => {
    return {
        createSave: articleId => dispatch(createSave(articleId)),
        archiveSave: save => dispatch(archiveSave(save)),
        deleteSave: saveId => dispatch(deleteSave(saveId))
    }
}

export default connect(mSTP, mDTP)(ArticleNav);