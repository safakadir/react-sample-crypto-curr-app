import { createSlice } from '@reduxjs/toolkit'

export const coinAssetsSlice = createSlice({
    name: "coinAssests",
    initialState: { loading: false, error: null, currentItem: null, items: [] },
    reducers: {
        setCoinAssetsLoading: state => {
            state.loading = true
            state.error = null
        },
        setCoinAssetsError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        clearCoinAssetsError: state => {
            state.error = null
        },
        setAllCoinAssets: (state, action) => {
            state.items = action.payload
            state.loading = false
            state.error = null
        },
        appendCoinAssets: (state, action) => {
            state.items = [...state.items, ...action.payload]
            state.loading = false
            state.error = null
        },
        setCurrentCoinAsset: (state, action) => {
            state.currentItem = action.payload
            state.loading = false
            state.error = null
        }
    }
})

export const { setCoinAssetsLoading, setCoinAssetsError, clearCoinAssetsError, setAllCoinAssets, appendCoinAssets, setCurrentCoinAsset } = coinAssetsSlice.actions

export default coinAssetsSlice.reducer
