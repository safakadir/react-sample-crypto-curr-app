export const acSetAllCoinAssets = (assets) => {
    return {
        type: 'coinAssets/setAssets',
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
        type: 'coinAssets/appendAssets',
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

export const acLoadingRate = () => {
    return {
        type: 'currency/loading'
    }
}
export const acErrorRate = (error) => {
    return {
        type: 'currency/error',
        payload: error
    }
}
export const acSetCurrency = (currencyId) => {
    return {
        type: 'currency/setCurrency',
        payload: currencyId
    }
}
export const acSetRate = (rate) => {
    return {
        type: 'currency/setRate',
        payload: rate
    }
}
export const acToggleTheme = () => {
    return {
        type: 'theme/toggle'
    }
}