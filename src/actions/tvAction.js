import axios from "axios";
import {
  airingTvShowUrl,
  popularTvShowUrl,
  topRatedTvShowUrl,
  searchedTvShowUrl,
} from "../api";

export const loadTv = ()=> async (dispatch)=>{

    const airingTvResults = await axios.get(airingTvShowUrl())
    const popularTvResults = await axios.get(popularTvShowUrl())
    const topRatedTvResults = await axios.get(topRatedTvShowUrl())

    dispatch({
        type:"GET_TV",
        payload:{
            airingToday:airingTvResults,
            popular:popularTvResults,
            topRated:topRatedTvResults
        }
    })
}

export const searchedTv = (tv_name)=> async (dispatch)=>{
    const searchedResults = await axios.get(searchedTvShowUrl(tv_name))

    dispatch({
        type:"GET_SEARCHED",
        payload:{
            searched:searchedResults
        }
    })
}