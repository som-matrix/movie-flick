import axios from "axios";
import {
  airingTvShowUrl,
  popularTvShowUrl,
  topRatedTvShowUrl,
  searchedTvShowUrl,
} from "../api";
import {getTv,getSearched} from '../constants'
export const loadTv = ()=> async (dispatch)=>{

    const airingTvResults = await axios.get(airingTvShowUrl())
    const popularTvResults = await axios.get(popularTvShowUrl())
    const topRatedTvResults = await axios.get(topRatedTvShowUrl())

    dispatch({
        type:getTv,
        payload:{
            airingToday:airingTvResults.data.results,
            popular:popularTvResults.data.results,
            topRated:topRatedTvResults.data.results
        }
    })
}
export const searchedTv = (tv_name)=> async (dispatch)=>{
    const searchedResults = await axios.get(searchedTvShowUrl(tv_name))

    dispatch({
        type:getSearched,
        payload:{
            searched:searchedResults
        }
    })
}