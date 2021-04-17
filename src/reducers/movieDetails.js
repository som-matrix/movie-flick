const initialState = {
    movieData:{},
    isLoading:true,
}

const movieDetailsReducer = (state=initialState,action)=>{
    switch(action.type){
      case "GET_DETAILS":
          return{
              ...state,
              movieData:action.payload.movie,
              isLoading:false
          }
        case "LOAD_DETAILS":
            return{
                ...state,
                isLoading:true
            }
        default:
            return{
                ...state
            }
    }
}

export default movieDetailsReducer