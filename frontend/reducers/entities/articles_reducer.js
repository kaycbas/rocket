import {
    RECEIVE_ARTICLES
} from '../../actions/article_actions';

const articlesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ARTICLES:
           return action.articles
        default:
            return state;
    }
};

export default articlesReducer;