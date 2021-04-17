import axios from "axios";
import {
  nowPlayingMoviesUrl,
  topRatedMoviesUrl,
  popularMoviesUrl,
  upcomingMoviesUrl,
  serachedMovieUrl,
} from "../api";

export const loadMovies = ()=> async (dispatch) => {

    const nowPlayingResults = await axios.get(nowPlayingMoviesUrl())
    const topRatedResults = await axios.get(topRatedMoviesUrl())
    const popularResults = await axios.get(popularMoviesUrl())
    const upcomingResults = await axios.get(upcomingMoviesUrl())

    dispatch({
        type:"GET_MOVIES",
        payload:{
            nowPlaying:nowPlayingResults,
            topRated:topRatedResults,
            popular:popularResults,
            upcoming:upcomingResults
        }
    })
}

export const searchMovies = (movie_name)=> async (dispatch) => {
    const searchResults = await axios.get(serachedMovieUrl(movie_name))

    dispatch({
        type:"GET_SEARCHED",
        payload:{
            searched:searchResults
        }
    })
}