import {
    RECEIVE_ARTICLES,
    START_LOADING_ARTICLES
} from '../../actions/article_actions';

const initialState = {
//   indexLoading: false,
  articlesLoading: false
};

const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ARTICLES:
            return Object.assign({}, state, { articlesLoading: false });
        case START_LOADING_ARTICLES:
            return Object.assign({}, state, { articlesLoading: true });
        default:
        return state;
    }
};

export default loadingReducer;
