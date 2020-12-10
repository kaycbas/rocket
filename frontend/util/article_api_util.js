import { $CombinedState } from "redux"

export const fetchArticles = data => {
    return $.ajax({
        method: 'GET',
        url: 'api/articles',
        data
    })
}