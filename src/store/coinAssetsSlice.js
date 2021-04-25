import axios from 'axios'
import { acAppendCoinAssets, acSetAllCoinAssets } from "./actionCreators"
import utils from '../utils'

const BATCH_LIMIT = 10

const coinAssetsReducer = (state = [], action) => {
    switch(action.type) {
        case 'coinAssets/setAll':
            return action.payload
        case 'coinAssets/append':
            return [...state, ...action.payload]
        default:
            return state
    }
}

export const fetchCoinAssets = (batchCount, search) => async (dispatch) => {
    const offset = batchCount*BATCH_LIMIT
    const url = `/assets?limit=${BATCH_LIMIT}&offset=${offset}` + (!utils.isEmpty(search) ? `&search=${search}` : '')
    const { data } = await axios.get(url)
    console.log(data)
    if(batchCount === 0) {
        dispatch(acSetAllCoinAssets(data.data)) 
    }
    else {
        dispatch(acAppendCoinAssets(data.data)) 
    }
}

export default coinAssetsReducer
