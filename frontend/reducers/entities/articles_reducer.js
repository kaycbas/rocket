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
    switch (action.type) {
        case RECEIVE_ARTICLES:
           return action.payload.articles;
        case RECEIVE_ARTICLE:
            const newArticle = { [action.article.id]: action.article };
            return Object.assign({}, state, newArticle);
        case RECEIVE_SAVE:
            nextState[action.save.article_id].save_id = action.save.id;
            return nextState;
        case REMOVE_SAVE:
            const filter = state[action.save.article_id].filter;
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