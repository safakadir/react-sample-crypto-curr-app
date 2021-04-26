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
    }
}

export default utils
