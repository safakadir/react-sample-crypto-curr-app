const utils = {
    isEmpty: (str) => {
        return !str || str === ''
    },

    lastPathPiece: (pathname) => {
        const pathPieces = pathname.split('/')
        return pathPieces[pathPieces.length-1]
    }
}

export default utils
