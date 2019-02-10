import { combineReducers } from 'redux';
import castReducer from './castReducer';
import movieReducer from './movieReducer';

export default combineReducers({
    cast: castReducer,
    movies: movieReducer
});