import React from "react"
import AsyncStorage from "@react-native-community/async-storage"
import { loginScreen } from "../app"
import Button from "./Button"

const BackButton = (props) => {
    return (<Button 
            label={"Log out"}
            variant="plain"
            onPress={() => {
                AsyncStorage.removeItem('token')
                loginScreen()
            }}
        />)
}

export default BackButton