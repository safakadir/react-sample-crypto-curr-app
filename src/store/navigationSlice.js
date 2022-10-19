import { createSlice } from '@reduxjs/toolkit'

import pages from '../pages'

const APPENDIX_SEPARATOR = ' - '

const findPage = (pathname) => {
    return pages.find(item => (item.isVariableItem && pathname.startsWith(item.path)) || pathname === item.path)
}

export const navigationSlice = createSlice({
    name: "navigation",
    initialState: { page: {}, actualPath: '/', titleCmp: '', appendix: '' },
    reducers: {
        newPage: (state, action) => {
            const page = findPage(action.payload)
            state.page = page
            state.actualPath = action.payload
            state.titleCmp = page.title+(page.isVariableItem ? APPENDIX_SEPARATOR+state.appendix : '')
            state.appendix = page.isVariableItem ? state.appendix : ''
        },
        appendPageTitle: (state, action) => {
            state.titleCmp = state.page.title+APPENDIX_SEPARATOR+action.payload
            state.appendix = action.payload
        }
    }
})

export const { newPage, appendPageTitle } = navigationSlice.actions

export default navigationSlice.reducer
