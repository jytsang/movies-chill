import _ from 'lodash';
import axios from 'axios';

import {
   FETCH_MOVIES,
   FETCH_MOVIE,
   FETCH_CAST,
   FETCH_PERSON
} from './types';

//get list of movies from api with listType (trending, popular, etc.) parameter
export const fetchMovies = (listType, ...args) => async dispatch => {
   //convert args array to object with key:value passed through prop
   const params = _.chain(args).keyBy('key').mapValues('data').value();
   
   let response = {};

   switch (listType) {
      case 'trending':
         response = await axios.get(`https://api.themoviedb.org/3/${listType}/movie/day?api_key=${process.env.REACT_APP_API_KEY}`);
         break;
      case 'popular':
         response = await axios.get(`https://api.themoviedb.org/3/movie/${listType}?api_key=${process.env.REACT_APP_API_KEY}`);
         break;
      case 'search':
         const keyword = params.keyword;
         response = await axios.get(`https://api.themoviedb.org/3/${listType}/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${keyword}`);
         break;
      case 'filmography':
         const personId = params.personId;
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