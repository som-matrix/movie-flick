
const initialState = {
    airingTodayTv:[],
    popularTv:[],
    topRatedTv:[],
    searchedTv:[]
}

 const tvReducer = (state=initialState,action)=>{

    switch(action.type){
        case "GET_TV":
            return{
              ...state,
              airingTodayTv:action.payload.airingToday,
              popularTv:action.payload.popular,
              topRatedTv:action.payload.topRated
            }
        case "GET_SEARCHED":
            return{
                ...state,
                searchedTv:action.payload.searched,
            }
        case "CLEAR_SEARCH":
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