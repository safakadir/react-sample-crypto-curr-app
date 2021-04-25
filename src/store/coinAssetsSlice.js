import axios from 'axios'
import { acSetAllCoinAssets } from "./actionCreators"

const coinAssetsReducer = (state = [], action) => {
    switch(action.type) {
        case 'coinAssets/setAll':
            return action.payload
        default:
            return state
    }
}

export const fetchCoinAssets = () => async (dispatch) => {
    const { data } = await axios.get('/assets')
    console.log(data)
    dispatch(acSetAllCoinAssets(data.data)) 
}

export default coinAssetsReducer
