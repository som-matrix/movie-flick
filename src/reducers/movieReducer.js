import {getMovies,getSearchedMovie,clearSearched} from '../constants'
const initialState = {
    nowPlayingMovies:[],
    topRatedMovies:[],
    popularMovies:[],
    upcomingMovies:[],
    searchedMovie:[],
}

const movieReducer = (state=initialState, action)=>{

    switch(action.type){
        case getMovies:
            return{
              ...state,
              nowPlayingMovies:action.payload.nowPlaying,
              topRatedMovies:action.payload.topRated,
              popularMovies:action.payload.popular,
              upcomingMovies:action.payload.upcoming,
              
            }
        case getSearchedMovie:
            return{
                ...state,
                searchedMovie:action.payload.searches,
            }
        case clearSearched:
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