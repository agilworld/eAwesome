import React from "react"
import { Button } from "react-native";
import { Navigation } from "react-native-navigation"

const BackButton = (props) => {
    return (<Button
        title='Log out'
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
            component: {
                name: 'com.Login'
            }
        })}
    />)
}

export default BackButton