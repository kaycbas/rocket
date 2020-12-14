import * as ApiUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const receiveFavorite = favorite => {
    return {
        type: RECEIVE_FAVORITE,
        favorite
    }
}

export const removeFavorite = favorite => {
    return {
        type: REMOVE_FAVORITE,
        favorite
    }
}

export const createFavorite = articleId => dispatch => (
    ApiUtil.createFavorite(articleId).then(favorite => (
        dispatch(receiveFavorite(favorite))
    ))
);

export const deleteFavorite = favId => dispatch => {
    return ApiUtil.deleteFavorite(favId).then(favorite => (
        dispatch(removeFavorite(favorite))
    ))
}
