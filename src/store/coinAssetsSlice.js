import axios from 'axios'
import { acAppendCoinAssets, acErrorCoinAssets, acLoadingCoinAssets, acSetAllCoinAssets, acSetCurrentCoinAsset } from "./actionCreators"
import utils from '../utils'

const BATCH_LIMIT = 10
const INITIAL_STATE = { loading: false, error: null, currentItem: null, items: [] }

const coinAssetsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'coinAssets/loading':
            return { ...state, loading: true, error: null }
        case 'coinAssets/error':
            return { ...state, loading: false, error: action.payload }
        case 'coinAssets/clearError':
            return { ...state, error: null }
        case 'coinAssets/setAssets':
            return { items: action.payload, loading: false, error: null }
        case 'coinAssets/appendAssets':
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
        const items = data.data
        if(Array.isArray(items) && items.length === 0 ) {
            throw new Error('No more items')
        }
        if(batchCount === 0) {
            dispatch(acSetAllCoinAssets(items)) 
        }
        else {
            dispatch(acAppendCoinAssets(items)) 
        } 
    }
    catch(error) {
        console.log(error)
        dispatch(acErrorCoinAssets(error.message))
    } 
}

export const fetchSingleAsset = (assetId) => async (dispatch) => {
    dispatch(acLoadingCoinAssets())
    try {
        const { data } = await axios.get('/assets/'+assetId)
        dispatch(acSetCurrentCoinAsset(data.data))
    }
    catch(error) {
        dispatch(acErrorCoinAssets(error.message))
    } 
}

export default coinAssetsReducer
