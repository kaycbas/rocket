import { $CombinedState } from "redux"

export const fetchArticles = data => {
    return $.ajax({
        method: 'GET',
        url: 'api/articles',
        data
    })
}

export const fetchArticle = id => {
    return $.ajax({
        method: 'GET',
        url: `api/articles/${id}`
    })
}