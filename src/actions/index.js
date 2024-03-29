import ES6Promise from 'es6-promise';
import axios from 'axios';
import history from '../utilities/history';

import {
   FETCH_MOVIES,
   FETCH_MOVIE,
   FETCH_CAST,
   FETCH_PERSON,
   SET_KEYWORD
} from './types';

//polyfill for promises (for IE support)
ES6Promise.polyfill();

//get list of movies from api with listType (trending, popular, etc.) parameter
export const fetchMovies = (listType, args) => async dispatch => {
   let pageNumber = args.pageNumber;
   
   let response = {};
   //get data from API depending on the list type
   switch (listType) {
      case 'trending':
         response = await axios.get(`https://api.themoviedb.org/3/${listType}/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}`);
         break;
      case 'popular':
         response = await axios.get(`https://api.themoviedb.org/3/movie/${listType}?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}`);
         break;
      case 'search':
         const keyword = args.keyword;
         response = await axios.get(`https://api.themoviedb.org/3/${listType}/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${keyword}&page=${pageNumber}`);
         break;
      case 'filmography':
         const personId = args.personId;
         response = await axios.get(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}`);
         response.data.results = response.data.cast;
         break;
      default:
         response.data = {};
         break;
   }
   
   dispatch({ type: FETCH_MOVIES, payload: response.data });
};

//get movie details from api with movie id paramter in URL
export const fetchMovie = (id) => async dispatch => {
   const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);

   dispatch({ type: FETCH_MOVIE, payload: response.data });
};

//get cast list from api with movie id parameter
export const fetchCast = (id) => async dispatch => {
   const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`);

   dispatch({ type: FETCH_CAST, payload: response.data.cast });
};

//get person details from api with person id paramter in URL
export const fetchPerson = (id) => async dispatch => {
   const response = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}`);

   dispatch({ type: FETCH_PERSON, payload: response.data });
};

//set keyword state
export const setKeyword = (keyword) => dispatch => {
   dispatch({ type: SET_KEYWORD, payload: keyword });
   history.push(`/search/${keyword}`);
   dispatch(fetchMovies('search', { keyword }));
};