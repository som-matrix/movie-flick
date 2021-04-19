import {getDetails,loadDetails} from '../constants'
const initialState = {
    tvData:[],
    castDataTv:[],
    isLoading:true
}

const tvDetailsReducer = (state=initialState,action)=>{
    switch(action.type){
      case getDetails:
          return{
              ...state,
              tvData:action.payload.tv,
              castDataTv:action.payload.cast,
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

export default tvDetailsReducer