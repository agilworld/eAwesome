import React, { Component } from "react"
import { Navigation } from "react-native-navigation";
import {SafeAreaView} from 'react-native'
//import App from "./App";
import {AppLaunched} from './src/app'; 
import Home from './src/screens/Home'
import Login from './src/screens/Login'

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
  
Navigation.registerComponent('com.Login', () =>
    WrappedComponent(Login),
)
Navigation.registerComponent('com.Home', () =>
    WrappedComponent(Home),
)

Navigation.events().registerAppLaunchedListener(() => {
    AppLaunched()
});