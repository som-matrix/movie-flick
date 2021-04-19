// import constants
import {
  popular,
  upcoming,
  top_rated,
  airing_today,
  now_playing,
} from "./constants";
// Movie and TV base url
const baseUrl = `https://api.themoviedb.org/3/movie/`;
const baseUrlTV = `https://api.themoviedb.org/3/tv/`;
// Env
const my_key = process.env.REACT_APP_API_KEY
// Movies
// Now Playing
export const nowPlayingMoviesUrl = () =>
  `${baseUrl}${now_playing}?api_key=${my_key}&language=en-US&page=1`;
// Popular Movies
export const popularMoviesUrl = () =>
  `${baseUrl}${popular}?api_key=${my_key}&language=en-US&page=1`;
// Top rated Movies
export const topRatedMoviesUrl = () =>
  `${baseUrl}${top_rated}?api_key=${my_key}&language=en-US&page=1`;
// Upcoming Movies
export const upcomingMoviesUrl = ()=> `${baseUrl}${upcoming}?api_key=${my_key}&language=en-US&page=1`;
// Get TV shows Url's
// Airing today
export const airingTvShowUrl = () =>
  `${baseUrlTV}${airing_today}?api_key=${my_key}&language=en-US&page=1`;
// Popular
export const popularTvShowUrl = () =>
  `${baseUrlTV}${popular}?api_key=${my_key}&language=en-US&page=1`;
// Top rated
export const topRatedTvShowUrl = () =>
  `${baseUrlTV}${top_rated}?api_key=${my_key}&language=en-US&page=1`;

// Search Movies and Tv
export const searchedMovieUrl = (movie_name) =>
  `https://api.themoviedb.org/3/search/movie?api_key=${my_key}&language=en-US&include_adult=false&query=${movie_name}`;
export const searchedTvShowUrl = (tv_name) =>
  `https://api.themoviedb.org/3/search/tv?api_key=${my_key}&language=en-US&include_adult=false&query=${tv_name}`;

// Get movie details and tv details 
export const getMovieDetailsUrl = (movie_id)=> `${baseUrl}${movie_id}?api_key=${my_key}&language=en-US`
export const getTvDetailsUrl = (tv_id)=> `${baseUrlTV}${tv_id}?api_key=${my_key}&language=en-US`

// Getting the cast and crew 
export const getMovieCastUrl = (movie_id)=> `${baseUrl}${movie_id}/credits?api_key=${my_key}&language=en-US`
export const getTvCastUrl = (tv_id)=> `${baseUrlTV}${tv_id}/credits?api_key=${my_key}&language=en-US`