import { createSlice } from '@reduxjs/toolkit'

import utils from "../utils"


export const themeSlice = createSlice({
    name: "theme",
    initialState: { dark: utils.readStorage('dark', false)},
    reducers: {
        toggleTheme: state => {
            state.dark = !state.dark
        }
    }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
