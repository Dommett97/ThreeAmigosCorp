import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composedWithDevTools } from 'redux-devtools-extension'

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(local.getItem('cartItems')) : []

const initialState = {
    cart: { cartItems: cartItemsFromStorage }
}

const middleware = {thunk}

const store = createStore(
    reducer,
    initialState,
    composedWithDevTools(applyMiddleware([...middleware]))
    )

export default store