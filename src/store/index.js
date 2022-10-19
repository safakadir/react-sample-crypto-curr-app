import { configureStore } from '@reduxjs/toolkit'

import coinAssetsReducer from './coinAssetsSlice'
import currencyReducer from './currencySlice'
import navigationReducer from './navigationSlice'
import themeReducer from './themeSlice'

const store = configureStore({
    reducer: {
        coinAssets: coinAssetsReducer,
        navigation: navigationReducer,
        currency: currencyReducer,
        theme: themeReducer
    }
})

export default store
