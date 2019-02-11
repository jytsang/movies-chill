import {
    FETCH_CAST,
    FETCH_PERSON
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_CAST:
            return action.payload;
        default:
            return state;
    }
};