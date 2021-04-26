const utils = {
    isEmpty: (str) => {
        return !str || str === ''
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
