// Action types imported from constant
import {getDetails,loadDetails} from '../constants'
const initialState = {
    movieData:[],
    castDataMovie:[],
    isLoading:false
}

const movieDetailsReducer = (state=initialState,action)=>{
    switch(action.type){
      case getDetails:
          return{
              ...state,
              movieData:action.payload.movie,
              castDataMovie:action.payload.cast,
              isLoading:false
           }
        case loadDetails:
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