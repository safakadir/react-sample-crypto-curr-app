import { combineReducers } from 'redux'
import coinAssetsReducers from './coinAssetsSlice'

export default combineReducers({
    coinAssets: coinAssetsReducers
})
