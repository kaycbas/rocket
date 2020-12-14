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
    let newSave;
    switch (action.type) {
        case RECEIVE_ARTICLES:
            return action.payload.saves;
        case RECEIVE_ARTICLE:
            if (action.payload.save.id) {
                newSave = { [action.payload.save.id]: action.payload.save };
                return Object.assign({}, state, newSave);
            } 
            return state;
        case RECEIVE_SAVES:
           return action.saves
        case RECEIVE_SAVE:
            newSave = { [action.save.id]: action.save };
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