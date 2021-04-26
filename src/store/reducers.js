import { combineReducers } from 'redux'
import coinAssetsReducer from './coinAssetsSlice'
import currencyReducer from './currencySlice'
import navigationReducer from './navigationSlice'

export default combineReducers({
    coinAssets: coinAssetsReducer,
    navigation: navigationReducer,
    currency: currencyReducer
})
