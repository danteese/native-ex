import React from 'react';
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'

import { reducer } from './todoListRedux'

const store = createStore(reducer, undefined, autoRehydrate)

persistStore(store)

import App from './RootComponent'

export default () => (
    <Provider store={store}>
        <App></App>
    </Provider>
)