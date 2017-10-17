import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducers'
import thunk  from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker'
import { AUTH_USER } from './auth/actions/types'
import './styles/styles.css'
import './styles/material.css'
import { initFirebase, getCurrentUser } from './utils/firebaseHelpers'
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
initFirebase()

const token = localStorage.getItem('token')
if(token){
    store.dispatch({
        type: AUTH_USER
    })
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'))
registerServiceWorker()
