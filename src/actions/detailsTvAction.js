import axios from 'axios';
import {getTvDetailsUrl} from '../api'
import {getDetails,loadDetails} from '../constants'
export const loadDetailsTv = (tv_id) => async (dispatch)=>{
    
    dispatch({
        type:loadDetails
    })
    const getTvResults = await axios.get(getTvDetailsUrl(tv_id))
    
    dispatch({
        type:getDetails,
        payload:{
            tv:getTvResults.data,
        }
    })
}