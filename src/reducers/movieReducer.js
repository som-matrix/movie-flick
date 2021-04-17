const initialState = {
    nowPlayingMovies:[],
    topRatedMovies:[],
    popularMovies:[],
    upcomingMovies:[],
    searchedMovie:[]
}

const movieReducer = (state=initialState, action)=>{

    switch(action.type){
        case "GET_MOVIES":
            return{
              ...state,
              nowPlayingMovies:action.payload.nowPlaying,
              topRatedMovies:action.payload.topRated,
              popularMovies:action.payload.popular,
              upcomingMovies:action.payload.upcoming,
              
            }
        case "GET_SEARCHED":
            return{
                ...state,
                serachedMovie:action.payload.searched
            }
        case "CLEAR_SEARCH":
            return{
                ...state,
                searchedMovie:[]
            }
        default:
            return{
                ...state
            }
    }
}

export default movieReducer