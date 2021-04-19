import axios from 'axios';
import {getMovieDetailsUrl,getMovieCastUrl} from "../api"
import {getDetails,loadDetails} from '../constants'
export const loadDetailsMovie = (movie_id) => async (dispatch)=>{
    
    dispatch({
        type:loadDetails
    })
    const getMovieResults = await axios.get(getMovieDetailsUrl(movie_id))
    const getMovieCastResults = await axios.get(getMovieCastUrl(movie_id))
    dispatch({
        type:getDetails,
        payload:{
            movie:getMovieResults.data, 
            cast:getMovieCastResults.data
        }
    })
}