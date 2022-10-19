import { createSlice } from '@reduxjs/toolkit'

import constants from '../constants'
import utils from '../utils'

const initialCurrencyId = utils.readStorage('currencyId', constants.baseCurrencyId)

const findCurrency = (currencyId) => {
    return constants.currencies.find(c => c.id === currencyId)
}

export const currencySlice = createSlice({
    name: "currency",
    initialState: { 
        selectedCurrency: findCurrency(initialCurrencyId),
        currentRate: constants.unitCurrencyRate.id === initialCurrencyId ? constants.unitCurrencyRate : null,
        loading: constants.unitCurrencyRate.id !== initialCurrencyId,
        error: null
    },
    reducers: {
        setCurrencyLoading: state => { 
            state.loading = true
            state.error = null
        },
        setCurrencyError: (state, action) => { 
            state.loading = false
            state.error = action.payload
        },
        setCurrency: (state, action) => {
            state.selectedCurrency = findCurrency(action.payload)
        },
        setRate: (state, action) => { 
            state.currentRate = action.payload
            state.loading = false
            state.error = null
        }
    }
})

export const { setCurrencyLoading, setCurrencyError, setCurrency, setRate } = currencySlice.actions

export default currencySlice.reducer
