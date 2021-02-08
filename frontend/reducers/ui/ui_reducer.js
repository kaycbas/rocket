import { combineReducers } from 'redux';
import loading from './loading_reducer';
import welcome from './welcome_reducer';

const uiReducer = combineReducers({
  loading,
  welcome
});

export default uiReducer;