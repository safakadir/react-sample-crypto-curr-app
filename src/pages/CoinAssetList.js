import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { setCurrentCoinAsset } from '../store/coinAssetsSlice'
import { fetchCoinAssets } from '../store/helpers'

import SearchInput from '../components/fundamental/SearchInput'
import Table from '../components/fundamental/Table'

import utils from '../utils'

const CoinAssetList = () => {

    const [count, setCount] = useState(0)
    const [search, setSearch] = useState('')
    const coinAssets = useSelector(state => state.coinAssets.items)
    const assetsLoading = useSelector(state => state.coinAssets.loading)
    const rateLoading = useSelector(state => state.currency.loading)
    const selectedCurrency = useSelector(state => state.currency.selectedCurrency)
    const currentRate = useSelector(state => state.currency.currentRate)
    const dark = useSelector(state => state.theme.dark)

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
            return rateLoading ? '-' : utils.convertCurrency(number, currentRate.rateUsd, selectedCurrency.cSymbol)
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
        dispatch(setCurrentCoinAsset(coinAsset))
        history.push('/coin/'+coinAsset.id)
    }

    return (
        <div className="sub-container mb-3">
            <SearchInput onSearch={handleSearch} />
            <Table items={coinAssets} columns={TABLE_COLUMNS} onRowClick={handleCoinClick} loading={assetsLoading || rateLoading} dark={dark} />
            <div className="d-flex">
                <div className="flex-grow-1" />
                <button type="button" className="btn btn-outline-primary align-self-end" onClick={handleLoadMore}>Load More</button>
            </div>
        </div>
    );
}

export default CoinAssetList
