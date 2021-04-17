import axios from 'axios';
import {getTvDetailsUrl} from '../api'

export const loadDetails = (tv_id) => async (dispatch)=>{

    dispatch({
        type:"LOAD_DETAILS"
    })
    const getTvResults = await axios.get(getTvDetailsUrl(tv_id))
    dispatch({
        type:"GET_DETAILS",
        payload:{
            tv:getTvResults
        }
    })
}