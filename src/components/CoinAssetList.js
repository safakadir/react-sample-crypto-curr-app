import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCoinAssets } from '../store/coinAssetsSlice'

import Table from './fundamental/Table'

//import SearchInput from './fundamental/SearchInput'

const TABLE_COLUMNS = [
    { key: 'rank', title: 'Rank' },
    { key: 'name', title: 'Name' },
    { key: 'symbol', title: 'Symbol' },
    { key: 'priceUsd', title: 'Price', enhance: number => '$'+parseFloat(number).toFixed(2) }
]

const CoinAssetList = () => {

    const [count, setCount] = useState(0)
    const [search, setSearch] = useState('')
    const coinAssets = useSelector(state => state.coinAssets)

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

    return (
        <div className>
            <Table items={coinAssets} columns={TABLE_COLUMNS} />
            <button type="button" class="btn btn-outline-primary" onClick={handleLoadMore}>Load More</button>
        </div>
    );
}

export default CoinAssetList
