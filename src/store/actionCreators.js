export const acSetAllCoinAssets = (assets) => {
    return {
        type: 'coinAssets/setAll',
        payload: assets
    }
}

export const acAppendCoinAssets = (assets) => {
    return {
        type: 'coinAssets/append',
        payload: assets
    }
}
