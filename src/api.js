// dotenv middleware
require('dotenv').config()

// Get  Movies Url's

// Now Playing
export const nowPlayingMoviesUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEy}&language=en-US&page=1`

// Popular Movies
export const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`

// Top rated Movies

export const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`

// Upcoming Movies

export const upcomingMoviesUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`