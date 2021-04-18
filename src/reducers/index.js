import {combineReducers} from'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import movieReducer from './movieReducer'
import tvReducer from './tvReducer'
import movieDetailsReducer from './movieDetails'
import tvDetailsReducer from './tvDetails'

const persistConfig = {
    key:'root',
    storage,
    whitelist:['movieDetails','tvDetails']
}
const rootReducers = combineReducers({
    movies:movieReducer,
    tv:tvReducer,
    movieDetails:movieDetailsReducer,
    tvDetails:tvDetailsReducer
})

export default persistReducer(persistConfig, rootReducers)
