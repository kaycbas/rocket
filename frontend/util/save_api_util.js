export const createSave = articleId => {
    return $.ajax({
        method: 'POST',
        url: `api/articles/${articleId}/saves`
    })
}

export const fetchSaves = () => {
    return $.ajax({
        method: 'GET',
        url: `api/saves`
    })
}

export const deleteSave = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/saves/${id}`
    })
}