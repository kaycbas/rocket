import * as ApiUtil from '../util/save_api_util';

export const RECEIVE_SAVES = 'RECEIVE_SAVES';
export const RECEIVE_SAVE = 'RECEIVE_SAVE';
export const REMOVE_SAVE = 'REMOVE_SAVE';

export const receiveSaves = saves => {
    return {
        type: RECEIVE_SAVES,
        saves
    }
}

export const receiveSave = save => {
    return {
        type: RECEIVE_SAVE,
        save
    }
}

export const removeSave = save => {
    return {
        type: REMOVE_SAVE,
        save
    }
}

export const fetchSaves = () => dispatch => (
    ApiUtil.fetchSaves().then(saves => (
        dispatch(receiveSaves(saves))
    ))
);

export const createSave = articleId => dispatch => (
    ApiUtil.createSave(articleId).then(save => (
        dispatch(receiveSave(save))
    ))
);

export const archiveSave = save => dispatch => {
    save.archived = true;
    return ApiUtil.updateSave(save).then(save => {
        dispatch(receiveSave(save))
    })
}

export const unArchiveSave = save => dispatch => {
    save.archived = false;
    return ApiUtil.updateSave(save).then(save => {
        dispatch(receiveSave(save))
    })
}

export const deleteSave = saveId => dispatch => {
    return ApiUtil.deleteSave(saveId).then(save => (
        dispatch(removeSave(save))
    ))
}