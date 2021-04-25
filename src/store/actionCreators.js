export const acSetAllCoinAssets = (assets) => {
    return {
        type: 'coinAssets/setAll',
        payload: assets
    }
}
