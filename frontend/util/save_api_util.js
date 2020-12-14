export const createSave = articleId => {
    return $.ajax({
        method: 'POST',
        url: `api/articles/${articleId}/saves`
    })
}

export const updateSave = save => {
    // debugger;
    return $.ajax({
        method: 'PATCH',
        url: `api/saves/${save.id}`,
        data: { 'save': save }
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