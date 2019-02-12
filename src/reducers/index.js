import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import castReducer from './castReducer';
import movieReducer from './movieReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    form: formReducer,
    cast: castReducer,
    movies: movieReducer,
    keyword: searchReducer
});