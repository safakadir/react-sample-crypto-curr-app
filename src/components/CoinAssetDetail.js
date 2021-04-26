import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from "react-router"
import { acAppendPageTitle } from '../store/actionCreators'
import { fetchSingleAsset } from '../store/coinAssetsSlice'
import utils from '../utils'
import ProgressBar from './fundamental/ProgressBar'

const CoinAssetDetail = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const assetId = utils.lastPathPiece(location.pathname)
    const asset = useSelector(state => state.coinAssets.currentItem)
    const loading = useSelector(state => state.coinAssets.loading)

    useEffect(() => {
        if(!asset) {
            dispatch(fetchSingleAsset(assetId))
        }
        else {
            dispatch(acAppendPageTitle(asset.symbol))
        }
    }, [asset, assetId, dispatch])

    return (
        <div>
            { loading && <ProgressBar className="mt-2" /> } 
            <p>{JSON.stringify(asset)}</p>
        </div>
    )
}

export default CoinAssetDetail
