import { combineReducers } from 'redux'
import coinAssetsReducer from './coinAssetsSlice'
import currencyReducer from './currencySlice'
import navigationReducer from './navigationSlice'
import themeReducer from './themeSlice'

export default combineReducers({
    coinAssets: coinAssetsReducer,
    navigation: navigationReducer,
    currency: currencyReducer,
    theme: themeReducer
})
