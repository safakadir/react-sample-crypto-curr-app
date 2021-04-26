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

    const selectedCurrency = useSelector(state => state.currency.selectedCurrency)
    const currentRate = useSelector(state => state.currency.currentRate)

    useEffect(() => {
        if(!asset) {
            dispatch(fetchSingleAsset(assetId))
        }
        else {
            dispatch(acAppendPageTitle(asset.symbol))
        }
    }, [asset, assetId, dispatch])

    const isUp = asset && asset.changePercent24Hr > 0

    return (
        <>
            { loading && <ProgressBar className="mt-2" /> } 
            { !!asset && (<>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-around">
                    <div className="d-flex flex-column align-items-center">
                        <h1>#{asset.rank}</h1>
                        <h5>RANK</h5>
                    </div>
                    <div className="d-flex flex-column align-items-center mt-3">
                        <h1>{asset.name+'('+asset.symbol+')'}</h1>
                        <h3>{utils.convertCurrency(asset.priceUsd, currentRate.rateUsd, selectedCurrency.cSymbol)}</h3>
                    </div>
                    <div className="mt-3">
                        <h3 style={{color: isUp ? 'green' : 'red'}}>
                            <i className={isUp ? 'bi-caret-up-fill' : 'bi-caret-down-fill'} ></i>
                            <span>{parseFloat(asset.changePercent24Hr).toFixed(2)+'%'}</span>
                        </h3>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-md-around mt-3 mt-md-5">
                    <div className="text-center">
                        <h5>Market Cap:</h5>
                        <p>{asset.marketCapUsd ? utils.convertCurrency(asset.marketCapUsd, currentRate.rateUsd, selectedCurrency.cSymbol) : ''}</p>
                    </div>
                    <div className="text-center">
                        <h5>Supply:</h5>
                        <p>{asset.supply ? utils.formatNumber(asset.supply)+' '+asset.symbol : ''}</p>
                    </div>
                    <div className="text-center">
                        <h5>Volume:</h5>
                        <p>{asset.volumeUsd24Hr ? utils.convertCurrency(asset.volumeUsd24Hr, currentRate.rateUsd, selectedCurrency.cSymbol) : ''}</p>
                    </div>
                </div>
            </>)}
        </>
    )
}

export default CoinAssetDetail
