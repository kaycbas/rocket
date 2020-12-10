import * as ApiUtil from '../util/article_api_util';

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

export const receiveArticles = articles => ({
    type: RECEIVE_ARTICLES,
    articles,
});

export const fetchArticles = filters => dispatch => (
    ApiUtil.fetchArticles(filters).then(articles => (
        dispatch(receiveArticles(articles))
    ))
);