import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { fetchCoinAssets } from '../store/coinAssetsSlice'

import SearchInput from './fundamental/SearchInput'
import Table from './fundamental/Table'

const TABLE_COLUMNS = [
    { key: 'rank', title: 'Rank' },
    { key: 'name', title: 'Name' },
    { key: 'symbol', title: 'Symbol' },
    { key: 'priceUsd', title: 'Price', enhance: number => '$'+parseFloat(number).toFixed(2) }
]

const CoinAssetList = () => {

    const [count, setCount] = useState(0)
    const [search, setSearch] = useState('')
    const coinAssets = useSelector(state => state.coinAssets.items)
    const loading = useSelector(state => state.coinAssets.loading)
    const error = useSelector(state => state.coinAssets.error)

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCoinAssets(0, search))
        setCount(0)
    }, [search])

    const handleLoadMore = () => {
        setCount(count+1)
        dispatch(fetchCoinAssets(count+1, search))
    }

    const handleSearch = (search) => {
        setSearch(search)
    }

    const handleCoinClick = (coinAsset) => {
        history.push('/coin/'+coinAsset.id)
    }

    return (
        <div style={{maxWidth:750, margin: 'auto', width: '50% !important'}}>
            <SearchInput onSearch={handleSearch} />
            <Table items={coinAssets} columns={TABLE_COLUMNS} onRowClick={handleCoinClick} loading={loading} />
            <div className="text-center mt-2">
                <button type="button" className="btn btn-outline-primary" onClick={handleLoadMore}>Load More</button>
            </div>
        </div>
    );
}

export default CoinAssetList
