import {getTv,getSearchedTv,clearSearched} from '../constants'
const initialState = {
    airingTodayTv:[],
    popularTv:[],
    topRatedTv:[],
    searchedTv:[],
}

 const tvReducer = (state=initialState,action)=>{

    switch(action.type){
        case getTv:
            return{
              ...state,
              airingTodayTv:action.payload.airingToday,
              popularTv:action.payload.popular,
              topRatedTv:action.payload.topRated
            }
        case getSearchedTv:
            return{
                ...state,
                searchedTv:action.payload.searches,
            }
        case clearSearched:
            return{
                ...state,
                searchedTv:[]
            }
        default:
            return{
                ...state
            }
    }
}

export default tvReducer