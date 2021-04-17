import axios from 'axios';
import {getMovieDetailsUrl} from '../api'
import {getDetails,loadDetails} from '../constants'
export const loadDetailsMovie = (movie_id) => async (dispatch)=>{

    dispatch({
        type:loadDetails
    })
    const getMovieResults = await axios.get(getMovieDetailsUrl(movie_id))
    dispatch({
        type:getDetails,
        payload:{
            movie:getMovieResults.data.results
        }
    })
}