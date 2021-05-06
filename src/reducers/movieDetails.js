// Action types imported from constant
import {getDetails,loadDetails} from '../constants'
const initialState = {
    movieData:[],
    isLoading:true
}

const movieDetailsReducer = (state=initialState,action)=>{
    switch(action.type){
      case getDetails:
          return{
              ...state,
              movieData:action.payload.movie,
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