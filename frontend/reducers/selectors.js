export const articlesArray = state => {
    let arr = Object.values(state.entities.articles)
    arr.sort((a, b) => (a.updated_at < b.updated_at) ? 1 : -1)
    return arr
}