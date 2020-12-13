import * as ApiUtil from '../util/article_api_util';

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const START_LOADING_ARTICLES = 'START_LOADING_ARTICLES';

export const receiveArticles = articles => {
    return {
        type: RECEIVE_ARTICLES,
        articles
    }
}

export const receiveArticle = article => {
    return {
        type: RECEIVE_ARTICLE,
        article
    }
}

export const startLoadingArticles = () => ({
    type: START_LOADING_ARTICLES
});

export const fetchArticles = filter => dispatch => {
    dispatch(startLoadingArticles());
    const formattedFilter = { [filter]: true }
    return ApiUtil.fetchArticles(formattedFilter).then(articles => (
        dispatch(receiveArticles(articles))
    ))
}

export const fetchArticle = id => dispatch => (
    ApiUtil.fetchArticle(id).then(article => (
        dispatch(receiveArticle(article))
    ))
);