import axios from 'axios'

import constants from '../constants'
import utils from '../utils'

import { setCurrencyLoading, setCurrencyError, setRate } from "./currencySlice"
import { setCoinAssetsLoading, setCoinAssetsError, setAllCoinAssets, appendCoinAssets, setCurrentCoinAsset } from './coinAssetsSlice'

const BATCH_LIMIT = 10

export const fetchRate = (currencyId) => async (dispatch) => {
    console.log("fetchRate"+currencyId)
    if(currencyId === constants.baseCurrencyId) {
        dispatch(setRate(constants.unitCurrencyRate))
        return
    }
    console.log("fetchRate"+currencyId)
    dispatch(setCurrencyLoading())
    try {
        const { data } = await axios.get('rates/'+currencyId)
        dispatch(setRate(data.data))
    }
    catch(error) {
        dispatch(setCurrencyError(error.message))
    } 
}

export const fetchCoinAssets = (batchCount, search) => async (dispatch) => {
    const offset = batchCount*BATCH_LIMIT
    const url = `/assets?limit=${BATCH_LIMIT}&offset=${offset}` + (!utils.isEmpty(search) ? `&search=${search}` : '')
    dispatch(setCoinAssetsLoading())
    try {
        const { data } = await axios.get(url)
        const items = data.data
        if(Array.isArray(items) && items.length === 0 ) {
            throw new Error('No more items')
        }
        if(batchCount === 0) {
            dispatch(setAllCoinAssets(items)) 
        }
        else {
            dispatch(appendCoinAssets(items)) 
        } 
    }
    catch(error) {
        console.log(error)
        dispatch(setCoinAssetsError(error.message))
    } 
}

export const fetchSingleAsset = (assetId) => async (dispatch) => {
    dispatch(setCoinAssetsLoading())
    try {
        const { data } = await axios.get('/assets/'+assetId)
        dispatch(setCurrentCoinAsset(data.data))
    }
    catch(error) {
        dispatch(setCoinAssetsError(error.message))
    } 
}