import { combineReducers } from 'redux'
import coinAssetsReducer from './coinAssetsSlice'
import navigationReducer from './navigationSlice'

export default combineReducers({
    coinAssets: coinAssetsReducer,
    navigation: navigationReducer
})
