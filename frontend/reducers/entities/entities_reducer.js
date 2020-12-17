import { combineReducers } from 'redux';

import articles from './articles_reducer';
import saves from './saves_reducer';
import tags from './tags_reducer';

export default combineReducers({
    articles,
    saves,
    tags
});