import React from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import RootComponent from './RootComponent'

import store from './store'

export default function AppWithStore() {
    return (
        <Provider store={store}>
            <RootComponent></RootComponent>
        </Provider>
    )
}