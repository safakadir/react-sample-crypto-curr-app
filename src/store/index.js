import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers'

/*const getPersisted = (key, defaultValue) => {
    const value = localStorage.getItem(key);
    if(value === undefined || value === null) return defaultValue;
    return JSON.parse(value); 
}*/

const initialState = {
    coinAssets: {loading: false, error: null, items: []},
    //showAdd: getPersisted('showAdd', false)
}

console.log(initialState)

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store
