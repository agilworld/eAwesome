// @flow
import React, {Component} from 'react'
import {SafeAreaView} from 'react-native'
import {Navigation} from 'react-native-navigation'
import Home from './screens/Home'
import Login from './screens/Login'

const WrappedComponent = (ChildComponent) => {
  class EnhancedComponent extends Component {
    static options = ChildComponent.options;
    render() {
      return (
          <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <ChildComponent navigator={Navigation} />
          </SafeAreaView>
      );
    }
  }
  return EnhancedComponent;
};

export function registerScreens() {
  Navigation.registerComponent('com.Login', () =>
    WrappedComponent(Login),
  )
  Navigation.registerComponent('com.Home', () =>
    WrappedComponent(Home),
  )
}
