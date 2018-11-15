/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react'
import {Provider} from 'react-redux'
import config from './src/ReduxStore/Configuration/config'
import {name as appName} from './app.json';

const store = config()
const myRedux = () =>(
    <Provider store={store}>
    <App/>
    </Provider>
)
AppRegistry.registerComponent(appName, () => myRedux);
