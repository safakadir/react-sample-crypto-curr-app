import utils from "../utils"

const INITIAL_STATE = { dark: utils.readStorage('dark', false)}

const themeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'theme/toggle':
            return {...state, dark: !state.dark}
        default:
            return state
    }
}

export default themeReducer
