import { connect } from 'react-redux'
import { 
    createSave,
    archiveSave,
    unArchiveSave,
    deleteSave
} from '../../actions/save_actions'
import {
    createFavorite, 
    deleteFavorite 
} from '../../actions/favorite_actions'
import { createHide } from '../../actions/hide_actions'
import ArticleIndexItem from './article_index_item'

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
        unArchiveSave: save => dispatch(unArchiveSave(save)),
        createFavorite: articleId => dispatch(createFavorite(articleId)),
        deleteFavorite: favId => dispatch(deleteFavorite(favId)),
        createHide: articleId => dispatch(createHide(articleId))
    }
}

export default connect(mSTP, mDTP)(ArticleIndexItem);