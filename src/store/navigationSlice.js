import pages from '../pages'

const INITIAL_STATE = { page: {}, actualPath: '/', titleCmp: '', appendix: '' }
const APPENDIX_SEPARATOR = ' - '

const findPage = (pathname) => {
    return pages.find(item => (item.isVariableItem && pathname.startsWith(item.path)) || pathname === item.path)
}

const navigationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'navigation/newPage':
            const page = findPage(action.payload)
            return { page: page,
                     actualPath: action.payload,
                     titleCmp: page.title+(page.isVariableItem ? APPENDIX_SEPARATOR+state.appendix : ''),
                     appendix: page.isVariableItem ? state.appendix : ''
                   }
        case 'navigation/appendPageTitle':
            return { ...state,
                     titleCmp: state.page.title+APPENDIX_SEPARATOR+action.payload,
                     appendix: action.payload
                   }
        default:
            return state
    }
}

export default navigationReducer
