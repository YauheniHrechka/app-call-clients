import { combineReducers } from 'redux';

import items from './items';
import categories from './categories';
import filter from './filter';

export default combineReducers({
    items,
    categories,
    filter
});