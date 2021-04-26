export const acSetAllCoinAssets = (assets) => {
    return {
        type: 'coinAssets/setAll',
        payload: assets
    }
}

export const acSetCurrentCoinAsset = (asset) => {
    return {
        type: 'coinAssets/setCurrent',
        payload: asset
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

export const acClearErrorCoinAssets = () => {
    return {
        type: 'coinAssets/clearError'
    }
}

export const acNewPage = (pathname) => {
    return {
        type: 'navigation/newPage',
        payload: pathname
    }
}
export const acAppendPageTitle = (appendix) => {
    return {
        type: 'navigation/appendPageTitle',
        payload: appendix
    }
}
