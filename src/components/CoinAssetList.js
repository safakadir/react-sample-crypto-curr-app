import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import constants from '../constants'
import { acSetCurrentCoinAsset } from '../store/actionCreators'
import { fetchCoinAssets } from '../store/coinAssetsSlice'

import SearchInput from './fundamental/SearchInput'
import Table from './fundamental/Table'

const CoinAssetList = () => {

    const [count, setCount] = useState(0)
    const [search, setSearch] = useState('')
    const coinAssets = useSelector(state => state.coinAssets.items)
    const assetsLoading = useSelector(state => state.coinAssets.loading)
    const rateLoading = useSelector(state => state.currency.loading)
    const selectedCurrencyId = useSelector(state => state.currency.selectedCurrencyId)
    const selectedCurrency = constants.currencies.find(c => c.id === selectedCurrencyId)
    const currentRate = useSelector(state => state.currency.currentRate)

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCoinAssets(0, search))
        setCount(0)
    }, [search, dispatch])

    const TABLE_COLUMNS = [
        { key: 'rank', title: 'Rank' },
        { key: 'name', title: 'Name' },
        { key: 'symbol', title: 'Symbol' },
        { key: 'priceUsd', title: 'Price', enhance: number => {
            return rateLoading ? '-' : selectedCurrency.cSymbol+parseFloat(number/currentRate.rateUsd).toFixed(2)
        }}
    ]

    const handleLoadMore = () => {
        setCount(count+1)
        dispatch(fetchCoinAssets(count+1, search))
    }

    const handleSearch = (search) => {
        setSearch(search)
    }

    const handleCoinClick = (coinAsset) => {
        dispatch(acSetCurrentCoinAsset(coinAsset))
        history.push('/coin/'+coinAsset.id)
    }

    return (
        <div className="sub-container mb-3">
            <SearchInput onSearch={handleSearch} />
            <Table items={coinAssets} columns={TABLE_COLUMNS} onRowClick={handleCoinClick} loading={assetsLoading || rateLoading} />
            <div className="d-flex">
                <div className="flex-grow-1" />
                <button type="button" className="btn btn-outline-primary align-self-end" onClick={handleLoadMore}>Load More</button>
            </div>
        </div>
    );
}

export default CoinAssetList
