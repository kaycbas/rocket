export const createFavorite = articleId => {
    return $.ajax({
        method: 'POST',
        url: `api/articles/${articleId}/favorites`
    })
}

export const deleteFavorite = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/favorites/${id}`
    })
}