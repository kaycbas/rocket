export const articlesArray = state => {
    let arr = Object.values(state.entities.articles)
    arr.sort((a, b) => (a.updated_at < b.updated_at) ? 1 : -1)
    return arr
}

export const labelsArray = state => {
    let arr = Object.values(state.entities.tags)
    let labels = [];
    for(let i=0; i<arr.length; i++) {
        labels.push(arr[i].label);
    }
    let uniqLabels = [...new Set(labels)];
    return uniqLabels;
}