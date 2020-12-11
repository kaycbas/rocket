import * as ApiUtil from '../util/article_api_util';

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';

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

export const fetchArticles = filters => dispatch => (
    ApiUtil.fetchArticles(filters).then(articles => (
        dispatch(receiveArticles(articles))
    ))
);

export const fetchArticle = id => dispatch => (
    ApiUtil.fetchArticle(id).then(article => (
        dispatch(receiveArticle(article))
    ))
);