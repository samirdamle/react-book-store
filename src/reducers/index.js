import { combineReducers } from 'redux';
import books from './bookReducers';

export default combineReducers({
    books: books

    // other reducers go here
});
