export const createSave = articleId => {
    return $.ajax({
        method: 'POST',
        url: `api/articles/${articleId}/saves`
    })
}

// export const fetchArticle = id => {
//     return $.ajax({
//         method: 'GET',
//         url: `api/articles/${id}`
//     })
// }