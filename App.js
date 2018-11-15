import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation'
import MainStack from './src/Screens/StackViews/index'
import AppInit from './src/Screens/FrontInit/FrontView'
export default class App extends Component {
  render() {
    return (
      <SwitchNav/>
    );
  }
}

export const SwitchNav = createSwitchNavigator(
  {
  AppInit: AppInit,
  MainApp: MainStack
  },
  {
    initialRouteName:'AppInit'
  }
)


