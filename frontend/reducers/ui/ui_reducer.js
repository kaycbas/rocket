import { combineReducers } from 'redux';
import loading from './loading_reducer';

const uiReducer = combineReducers({
  loading
});

export default uiReducer;