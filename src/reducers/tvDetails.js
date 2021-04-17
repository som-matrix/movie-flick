const initialState = {
    tvData:{},
    isLoading:true,
}

const tvDetailsReducer = (state=initialState,action)=>{
    switch(action.type){
      case "GET_DETAILS":
          return{
              ...state,
              tvData:action.payload.tv,
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

export default tvDetailsReducer