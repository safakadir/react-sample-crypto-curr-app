import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers'

/*const getPersisted = (key, defaultValue) => {
    const value = localStorage.getItem(key);
    if(value === undefined || value === null) return defaultValue;
    return JSON.parse(value); 
}*/

// const initialState = {
//     coinAssets: { loading: false, error: null, items: [] },
//     navigation: { path: '/', title: '' }
// }

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store
