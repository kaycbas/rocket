import { connect } from 'react-redux';
import ArticleNav from './article_nav';
import { 
    createSave,
    archiveSave,
    unArchiveSave,
    deleteSave 
} from '../../actions/save_actions';
import { 
    createFavorite, 
    deleteFavorite 
} from '../../actions/favorite_actions'

const mSTP = (state, ownProps) => {
    return {
    }
}

const mDTP = dispatch => {
    return {
        createSave: articleId => dispatch(createSave(articleId)),
        archiveSave: save => dispatch(archiveSave(save)),
        unArchiveSave: save => dispatch(unArchiveSave(save)),
        deleteSave: saveId => dispatch(deleteSave(saveId)),
        createFavorite: articleId => dispatch(createFavorite(articleId)),
        deleteFavorite: favId => dispatch(deleteFavorite(favId))
    }
}

export default connect(mSTP, mDTP)(ArticleNav);