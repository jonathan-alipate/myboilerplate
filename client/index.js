import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import App from './components/App'
import reducers from './reducers/reducer'

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Provider store={App}>
            <App />
        </Provider>,
        document.getElementById('app')
    )
})