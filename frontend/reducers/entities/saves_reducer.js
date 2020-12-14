import {
    RECEIVE_ARTICLES,
    RECEIVE_ARTICLE
} from '../../actions/article_actions';
import {
    RECEIVE_SAVE,
    RECEIVE_SAVES,
    REMOVE_SAVE
} from '../../actions/save_actions'

const savesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ARTICLES:
            return action.payload.saves;
        case RECEIVE_SAVES:
           return action.saves
        case RECEIVE_SAVE:
            const newSave = { [action.save.id]: action.save };
            return Object.assign({}, state, newSave);
        case REMOVE_SAVE:
            let nextState = Object.assign({}, state);
            delete nextState[action.save.id];
            return nextState;
        default:
            return state;
    }
};

export default savesReducer;