import axios from 'axios';
import {getMovieDetailsUrl} from '../api'

export const loadDetails = (movie_id) => async (dispatch)=>{

    dispatch({
        type:"LOAD_DETAILS"
    })
    const getMovieResults = await axios.get(getMovieDetailsUrl(movie_id))
    dispatch({
        type:"GET_DETAILS",
        payload:{
            movie:getMovieResults
        }
    })
}