import * as ApiUtil from '../util/save_api_util';

export const RECEIVE_SAVES = 'RECEIVE_SAVES';
export const RECEIVE_SAVE = 'RECEIVE_SAVE';

// export const receiveSaves = saves => {
//     return {
//         type: RECEIVE_SAVES,
//         saves
//     }
// }

export const receiveSave = save => {
    return {
        type: RECEIVE_SAVE,
        save
    }
}

// export const fetchArticles = filters => dispatch => (
//     ApiUtil.fetchArticles(filters).then(articles => (
//         dispatch(receiveArticles(articles))
//     ))
// );

export const createSave = articleId => dispatch => (
    ApiUtil.createSave(articleId).then(save => (
        dispatch(receiveSave(save))
    ))
);