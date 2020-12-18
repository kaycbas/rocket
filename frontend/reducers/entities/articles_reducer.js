import {
    RECEIVE_ARTICLES,
    RECEIVE_ARTICLE
} from '../../actions/article_actions';
import { 
    RECEIVE_SAVE,
    REMOVE_SAVE
 } from '../../actions/save_actions';
 import { 
    RECEIVE_FAVORITE,
    REMOVE_FAVORITE 
} from '../../actions/favorite_actions';
import { 
    RECEIVE_HIDE,
    REMOVE_HIDE 
} from '../../actions/hide_actions';
import { 
    RECEIVE_TAG,
    REMOVE_TAG
} from '../../actions/tag_actions';

const articlesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    let saveId, filter, articleId, article, archived;
    
    switch (action.type) {
        case RECEIVE_ARTICLES:
           return action.payload.articles;
        case RECEIVE_ARTICLE:
            articleId = action.payload.article.id;
            article = action.payload.article
            const newArticle = { [articleId]: article };
            if (!article.save_id) {
                newArticle[articleId].filter = 'featured';
            } else if (action.payload.save.archived) {
                newArticle[articleId].filter = 'archived';
            } else {
                newArticle[articleId].filter = 'list';
            }
            return Object.assign({}, state, newArticle);
        case RECEIVE_SAVE:
            saveId = action.save.id;
            articleId = action.save.article_id;
            archived = action.save.archived;
            filter = nextState[articleId].filter;

            nextState[articleId].save_id = saveId;
            if (archived && filter !== 'archived' 
            || !archived && filter == 'archived') {
                delete nextState[articleId];
            }
            return nextState;
        case REMOVE_SAVE:
            filter = state[action.save.article_id].filter;
            if (filter === 'featured') {
                state[action.save.article_id].save_id = null;
            } else {
                delete nextState[action.save.article_id];
            }
            return nextState;
        case RECEIVE_FAVORITE:
            articleId = action.favorite.article_id;
            nextState[articleId].favorite_id = action.favorite.id;
            return nextState;
        case REMOVE_FAVORITE:
            filter = state[action.favorite.article_id].filter;
            if (filter === 'favorites') {
                delete nextState[action.favorite.article_id];
            } else {
                // TODO: I think this is wrong.... (fixed)
                nextState[action.favorite.article_id].favorite_id = null;
            }
            return nextState;
        case RECEIVE_HIDE:
            delete nextState[action.hide.article_id];
            return nextState;
        case RECEIVE_TAG:
            articleId = action.tag.article_id;
            nextState[articleId].tag_id = action.tag.id;
            return nextState;
        case REMOVE_TAG:
            filter = state[action.tag.article_id].filter;
            let tagPath = 'tag:'.concat(action.tag.label)
            if (filter === tagPath) {
                delete nextState[action.tag.article_id];
            } else {
                nextState[action.tag.article_id].tag_id = null;
            }
            return nextState;
        default:
            return state;
    }
};

export default articlesReducer;