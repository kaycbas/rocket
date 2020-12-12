import {
    RECEIVE_SAVE,
    RECEIVE_SAVES
} from '../../actions/save_actions';

const savesReducer = (state = {}, action) => {
    // debugger;
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SAVES:
           return action.saves
        case RECEIVE_SAVE:
            const newSave = { [action.save.id]: action.save };
            return Object.assign({}, state, newSave);
        default:
            return state;
    }
};

export default savesReducer;