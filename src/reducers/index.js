import {combineReducers} from'redux'
import movieReducer from './movieReducer'
import tvReducer from './tvReducer'
import movieDetailsReducer from './movieDetails'
import tvDetailsReducer from './tvDetails'

const rootReducers = combineReducers({
    movies:movieReducer,
    tv:tvReducer,
    movieDetails:movieDetailsReducer,
    tvDetails:tvDetailsReducer
})

export default  rootReducers
