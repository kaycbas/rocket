import * as ApiUtil from '../util/tag_api_util';

export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

export const receiveTag = tag => {
    return {
        type: RECEIVE_TAG,
        tag
    }
}

export const removeTag = tag => {
    return {
        type: REMOVE_TAG,
        tag
    }
}

// export const createTag = articleId => dispatch => (
//     ApiUtil.createTag(articleId).then(tag => (
//         dispatch(receiveTag(tag))
//     ))
// );

export const createTag = tag => dispatch => (
    ApiUtil.createTag(tag).then(tag => (
        dispatch(receiveTag(tag))
    ))
);

export const deleteTag = tagId => dispatch => {
    return ApiUtil.deleteTag(tagId).then(tag => (
        dispatch(removeTag(save))
    ))
}