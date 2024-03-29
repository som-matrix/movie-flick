import axios from "axios";
import {
  nowPlayingMoviesUrl,
  topRatedMoviesUrl,
  popularMoviesUrl,
  upcomingMoviesUrl,
  searchedMovieUrl,
} from "../api";
import {getMovies,getSearchedMovie} from '../constants'
export const loadMovies = ()=> async (dispatch) => {

    const nowPlayingResults = await axios.get(nowPlayingMoviesUrl())
    const topRatedResults = await axios.get(topRatedMoviesUrl())
    const popularResults = await axios.get(popularMoviesUrl())
    const upcomingResults = await axios.get(upcomingMoviesUrl())

    dispatch({
        type:getMovies,
        payload:{
            nowPlaying:nowPlayingResults.data.results,
            topRated:topRatedResults.data.results,
            popular:popularResults.data.results,
            upcoming:upcomingResults.data.results
        }
    })
}

export const searchMovies = (movie_name)=> async (dispatch) => {
    const searchResults = await axios.get(searchedMovieUrl(movie_name))

        
    dispatch({
        type:getSearchedMovie,
        payload:{
            searches:searchResults.data.results
        }
    })
   
}