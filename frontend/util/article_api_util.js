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

export const createArticle = url => {
    return $.ajax({
        method: 'POST',
        url: `api/articles`,
        data: { url: url }
    })
}