import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducers'
import thunk  from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker'

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'))
registerServiceWorker()
