import axios from 'axios'
import { acAppendCoinAssets, acErrorCoinAssets, acLoadingCoinAssets, acSetAllCoinAssets, acSetCurrentCoinAsset } from "./actionCreators"
import utils from '../utils'

const BATCH_LIMIT = 10
const INITIAL_STATE = { loading: false, error: null, items: [], currentItem: null }

const coinAssetsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'coinAssets/loading':
            return { ...state, loading: true, error: null }
        case 'coinAssets/error':
            return { ...state, loading: false, error: action.payload }
        case 'coinAssets/setAll':
            return { items: action.payload, loading: false, error: null }
        case 'coinAssets/append':
            return { items: [...state.items, ...action.payload], loading: false, error: null }
        case 'coinAssets/setCurrent':
            return { ...state, currentItem: action.payload, loading: false, error: null }
        default:
            return state
    }
}

export const fetchCoinAssets = (batchCount, search) => async (dispatch) => {
    const offset = batchCount*BATCH_LIMIT
    const url = `/assets?limit=${BATCH_LIMIT}&offset=${offset}` + (!utils.isEmpty(search) ? `&search=${search}` : '')
    dispatch(acLoadingCoinAssets())
    try {
        const { data } = await axios.get(url)
        if(batchCount === 0) {
            dispatch(acSetAllCoinAssets(data.data)) 
        }
        else {
            dispatch(acAppendCoinAssets(data.data)) 
        } 
    }
    catch(error) {
        dispatch(acErrorCoinAssets(error))
    } 
}

export const fetchSingleAsset = (assetId) => async (dispatch) => {
    dispatch(acLoadingCoinAssets())
    try {
        const { data } = await axios.get('/assets/'+assetId)
        dispatch(acSetCurrentCoinAsset(data.data))
    }
    catch(error) {
        dispatch(acErrorCoinAssets(error))
    } 
}

export default coinAssetsReducer
