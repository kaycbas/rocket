import {
    RECEIVE_ARTICLES,
    RECEIVE_ARTICLE
} from '../../actions/article_actions';
import { 
    RECEIVE_SAVE,
    REMOVE_SAVE
 } from '../../actions/save_actions';

const articlesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    let saveId, filter, articleId, archived;
    
    switch (action.type) {
        case RECEIVE_ARTICLES:
           return action.payload.articles;
        case RECEIVE_ARTICLE:
            articleId = action.payload.article.id;
            const newArticle = { [articleId]: action.payload.article };
            if (state[articleId]) {
                newArticle[articleId].filter = state[articleId].filter;
            }
            return Object.assign({}, state, newArticle);
        case RECEIVE_SAVE:
            saveId = action.save.id;
            articleId = action.save.article_id;
            archived = action.save.archived;
            filter = nextState[articleId].filter;

            nextState[articleId].save_id = saveId;
            if (archived && filter !== 'archived') {
                delete nextState[articleId];
            }
            return nextState;
        case REMOVE_SAVE:
            filter = state[action.save.article_id].filter;
            if (filter == 'featured') {
                state[action.save.article_id].save_id = null;
            } else {
                delete nextState[action.save.article_id];
            }
            return nextState;
        default:
            return state;
    }
};

export default articlesReducer;