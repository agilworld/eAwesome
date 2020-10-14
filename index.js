import React from "react"
import { Navigation } from "react-native-navigation";
import {AppLaunched} from './src/app'; 
import { registerScreens } from "./src/registerScreen"

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
    AppLaunched()
    
});