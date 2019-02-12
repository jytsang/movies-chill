import {
    SEARCH_MOVIES,
    FETCH_MOVIES,
    FETCH_MOVIE
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return action.payload;
        case FETCH_MOVIE:
            return { [action.payload.id]: action.payload };
        default:
            return state;
    }
};