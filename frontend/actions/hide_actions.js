import * as ApiUtil from '../util/hide_api_util';

export const RECEIVE_HIDE = 'RECEIVE_HIDE';
export const REMOVE_HIDE = 'REMOVE_HIDE';

export const receiveHide = hide => {
    return {
        type: RECEIVE_HIDE,
        hide
    }
}

// export const removeHides = () => {
//     return {
//         type: REMOVE_HIDES
//     }
// }

export const createHide = articleId => dispatch => (
    ApiUtil.createHide(articleId).then(hide => (
        dispatch(receiveHide(hide))
    ))
);

export const deleteHides = () => dispatch => ApiUtil.deleteHides();
