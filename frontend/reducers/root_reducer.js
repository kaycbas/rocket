import { combineReducers } from 'redux';
import session from './session/session_reducer';
import errors from './errors/errors_reducer';
// import entitiesReducer from './entities/entities_reducer';
// import uiReducer from './ui/ui_reducer';

export default combineReducers({
    // entities: entitiesReducer,
    session,
    errors,
    // ui: uiReducer
})