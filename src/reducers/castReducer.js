import _ from 'lodash';
import {
    FETCH_CAST,
    FETCH_PERSON
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_CAST:
            return { ...state, ..._.mapKeys(action.payload, 'cast_id') };
        case FETCH_PERSON:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};