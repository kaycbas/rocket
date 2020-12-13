import { combineReducers } from 'redux';
import loading from './loading_reducer';
// import filter from './filter_reducer';
// import errors from './errors_reducer';

const uiReducer = combineReducers({
  loading,
  // errors
});

export default uiReducer;