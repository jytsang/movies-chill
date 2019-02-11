import axios from 'axios';

import { 
    SEARCH_MOVIES,
    FETCH_MOVIES,
    FETCH_MOVIE,
    FETCH_CAST,
    FETCH_PERSON
 } from './types';

 //get list of movies from api with listType (trending, popular, etc.) parameter
 export const fetchMovies = (listType = "trending") => async dispatch => {
    const response = await axios.get(`https://api.themoviedb.org/3/${listType}/movie/day?api_key=64f7b32bc10e82b03cd06c41c51ff1e5`);

    dispatch({ type: FETCH_MOVIES, payload: response.data });
};

//get movie details from api with movie id paramter in URL
 export const fetchMovie = (id) => async dispatch => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=64f7b32bc10e82b03cd06c41c51ff1e5`);

    dispatch({ type: FETCH_MOVIES, payload: response.data });
};