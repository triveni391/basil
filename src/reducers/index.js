import { combineReducers } from 'redux';
import restuarant from './restuarant';
import restuarants from './restuarants';
export default combineReducers({
    restuarants: restuarants,
    restuarant: restuarant
});