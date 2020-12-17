import {
    RECEIVE_TAG,
    REMOVE_TAG
} from '../../actions/tag_actions'
import {
    RECEIVE_ARTICLES,
    RECEIVE_ARTICLE
} from '../../actions/article_actions';

const tagsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newTag;
    switch (action.type) {
        case RECEIVE_ARTICLES:
            // return action.payload.saves;
            return state;
        case RECEIVE_ARTICLE:
            // if (action.payload.save.id) {
            //     newSave = { [action.payload.save.id]: action.payload.save };
            //     return Object.assign({}, state, newSave);
            // } 
            return state;
        case RECEIVE_TAG:
            newTag = { [action.tag.id]: action.tag };
            return Object.assign({}, state, newTag);
        case REMOVE_TAG:
            let nextState = Object.assign({}, state);
            delete nextState[action.tag.id];
            return nextState;
        default:
            return state;
    }
};

export default tagsReducer;