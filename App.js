import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { reducer } from './postRedux'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(reducer, applyMiddleware(thunk))

import Root from './Root'

export default () => (
    <Provider store={store}>
        <Root></Root>
    </Provider>
)