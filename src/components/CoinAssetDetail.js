import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from "react-router"
import { acAppendPageTitle } from '../store/actionCreators'
import utils from '../utils'

const CoinAssetDetail = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const assetId = utils.lastPathPiece(location.pathname)
    const asset = useSelector(state => state.coinAssets.items.find(item => item.id === assetId))

    useEffect(() => {
        dispatch(acAppendPageTitle(asset.symbol))
    }, [asset])

    return (
        <div>
            <h1>CoinAssetDetail</h1>
            <p>{JSON.stringify(asset)}</p>
        </div>
    )
}

export default CoinAssetDetail
