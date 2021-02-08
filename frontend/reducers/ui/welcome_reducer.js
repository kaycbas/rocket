import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../../actions/welcome_actions';

const welcomeReducer = (state = true, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MODAL:
            return true;
        case CLOSE_MODAL:
            return false;
        default:
            return state;
    }
};

export default welcomeReducer;
