import axios from 'axios'
import constants from '../constants'
import utils from '../utils'
import { acErrorRate, acLoadingRate, acSetRate } from './actionCreators'

const findCurrency = (currencyId) => {
    return constants.currencies.find(c => c.id === currencyId)
}

const initialCurrencyId = utils.readStorage('currencyId', constants.baseCurrencyId)

const INITIAL_STATE = { 
    selectedCurrency: findCurrency(initialCurrencyId),
    currentRate: constants.unitCurrencyRate.id === initialCurrencyId ? constants.unitCurrencyRate : null,
    loading: constants.unitCurrencyRate.id !== initialCurrencyId,
    error: null
}

const currencyReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'currency/loading':
            return { ...state, loading: true, error: null }
        case 'currency/error':
            return { ...state, loading: false, error: action.payload }
        case 'currency/setCurrency':
            return {...state, selectedCurrency: findCurrency(action.payload)}
        case 'currency/setRate':
            return {...state, currentRate: action.payload, loading: false, error: null}
        default:
            return state
    }
}

export const fetchRate = (currencyId) => async (dispatch) => {
    console.log("fetchRate"+currencyId)
    if(currencyId === constants.baseCurrencyId) {
        dispatch(acSetRate(constants.unitCurrencyRate))
        return
    }
    console.log("fetchRate"+currencyId)
    dispatch(acLoadingRate())
    try {
        const { data } = await axios.get('rates/'+currencyId)
        dispatch(acSetRate(data.data))
    }
    catch(error) {
        dispatch(acErrorRate(error.message))
    } 
}

export default currencyReducer
