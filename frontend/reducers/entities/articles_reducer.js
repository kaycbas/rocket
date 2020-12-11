import {
    RECEIVE_ARTICLES,
    RECEIVE_ARTICLE
} from '../../actions/article_actions';

const articlesReducer = (state = {}, action) => {
    debugger
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ARTICLES:
           return action.articles
        case RECEIVE_ARTICLE:
            // let nextState = Object.assign({}, state);
            // nextState[]
            // const newArticle = { [action.article.id]: action.article };
            // return Object.assign({}, state, newArticle);
            return state;
        default:
            return state;
    }
};

export default articlesReducer;