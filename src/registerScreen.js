// @flow
import React, {Component} from 'react'
import {SafeAreaView} from 'react-native'
import {Navigation} from 'react-native-navigation'
import Home from './screens/Home'
import Login from './screens/Login'
import BackButton from "./components/BackButton"

const WrappedComponent = (ChildComponent) => {
  class EnhancedComponent extends Component {
    static options = ChildComponent.options;
    render() {
      return (
          <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <ChildComponent {...this.props} navigator={Navigation} />
          </SafeAreaView>
      );
    }
  }
  return EnhancedComponent;
}

const MiniComponent = (ChildComponent) => {
    class EnhancedComponent extends Component {
      render() {
        return <ChildComponent {...this.props} />
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
  Navigation.registerComponent('ButtonComponent', () => MiniComponent(BackButton) );

}
