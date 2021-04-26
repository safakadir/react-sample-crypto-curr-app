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

export const acLoadingCoinAssets = () => {
    return {
        type: 'coinAssets/loading'
    }
}

export const acErrorCoinAssets = (error) => {
    return {
        type: 'coinAssets/error',
        payload: error
    }
}
