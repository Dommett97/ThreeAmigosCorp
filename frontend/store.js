import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composedWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({})

const initialState = {}

const middleware = {thunk}

const store = createStore(
    reducer,
    initialState,
    composedWithDevTools(applyMiddleware([...middleware]))
    )

export default store