import {getMovies,getSearched,clearSearched} from '../constants'
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
        case getSearched:
            return{
                ...state,
                serachedMovie:action.payload.searched,
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