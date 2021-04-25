import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCoinAssets } from '../store/coinAssetsSlice'

const CoinAssetList = () => {

    const dispatch = useDispatch()
    const coinAssets = useSelector(state => state.coinAssets)
    useEffect(() => {
        dispatch(fetchCoinAssets())
    }, [dispatch])

    return (
        <>
            { coinAssets.map(coinAsset => (
                <div>
                <h1>{coinAsset.name}</h1>
                <h3>{coinAsset.symbol}</h3>
                </div>
            )) }
        </>
    )
}

export default CoinAssetList
