import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const signOutCurrentUser = () => {
    return {
        type: SIGNOUT_CURRENT_USER
    }
}

const receiveSessionErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: errors.responseJSON
    }
};

export const clearErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS,
    }
}

export const signUp = user => dispatch => {
    return SessionApiUtil.signUp(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveSessionErrors(errors))
        );
}

export const signIn = user => dispatch => {
    return SessionApiUtil.signIn(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveSessionErrors(errors))
        );
}

export const signOut = () => dispatch => {
    return SessionApiUtil.signOut()
        .then(
            () => dispatch(signOutCurrentUser(user))
        );
}