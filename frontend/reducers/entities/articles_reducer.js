import {
    RECEIVE_ARTICLES,
    RECEIVE_ARTICLE
} from '../../actions/article_actions';

const articlesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ARTICLES:
           return action.articles
        case RECEIVE_ARTICLE:
            const newArticle = { [action.article.id]: action.article };
            return Object.assign({}, state, newArticle);
        default:
            return state;
    }
};

export default articlesReducer;