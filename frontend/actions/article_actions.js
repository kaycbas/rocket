import * as ApiUtil from '../util/article_api_util';

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const START_LOADING_ARTICLES = 'START_LOADING_ARTICLES';
export const RECEIVE_ARTICLES_FILTER = 'RECEIVE_ARTICLES_FILTER';

export const receiveArticles = payload => {
    return {
        type: RECEIVE_ARTICLES,
        payload
    }
}

export const receiveArticle = payload => {
    return {
        type: RECEIVE_ARTICLE,
        payload
    }
}

export const startLoadingArticles = () => ({
    type: START_LOADING_ARTICLES
});

export const fetchArticles = filter => dispatch => {
    dispatch(startLoadingArticles());
    return ApiUtil.fetchArticles({ filter }).then(payload => (
        dispatch(receiveArticles(payload))
    ))
}

export const fetchArticle = id => dispatch => (
    ApiUtil.fetchArticle(id).then(payload => (
        dispatch(receiveArticle(payload))
    ))
);