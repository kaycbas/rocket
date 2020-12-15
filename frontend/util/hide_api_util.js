export const createHide = articleId => {
    return $.ajax({
        method: 'POST',
        url: `api/articles/${articleId}/hides`
    })
}

export const deleteHide = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/hides/${id}`
    })
}