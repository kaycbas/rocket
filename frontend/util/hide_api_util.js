export const createHide = articleId => {
    return $.ajax({
        method: 'POST',
        url: `api/articles/${articleId}/hides`
    })
}

export const deleteHides = () => {
    return $.ajax({
        method: 'DELETE',
        url: `api/hides/1`
    })
}