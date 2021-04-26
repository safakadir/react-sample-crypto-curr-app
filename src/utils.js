const utils = {
    isEmpty: (obj) => {
        return !obj || obj === '' || (Array.isArray(obj) && obj.length === 0)
    },

    lastPathPiece: (pathname) => {
        const pathPieces = pathname.split('/')
        return pathPieces[pathPieces.length-1]
    },

    getSafeValue: (obj, key) => {
        if(!obj) return ''
        return obj[key]
    },

    readStorage: (key, defaultValue) => {
        const value = localStorage.getItem(key)
        if(value === undefined || value === null) return defaultValue
        try {
            return JSON.parse(value)
        }
        catch(e) {
            return value
        }
    }
}

export default utils
