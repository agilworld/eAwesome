/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { isEmpty } from "lodash"
import AsyncStorage from "@react-native-community/async-storage"
import { homeScreen  } from "../app"
import { credentials } from "../constants/config"
import InputText from "../components/InputText"
import Button from "../components/Button"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    innerContainer: {
      paddingHorizontal: 5,
      paddingTop: 30,
      backgroundColor: 'rgba(0,0,0,0.4)',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent: 'center',
    },
    header:{
        alignItems: 'center',
        margin:20,
        justifyContent: 'center',
    },
    formContainer: {
      backgroundColor: 'white',
      justifyContent: 'center',
      margin: 25,
    },
    buttonContainer: {
      marginTop: 15,
    },
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 80,
    }
  })

  const Login = (props) => {
    const [state, setState] = useState({
        id:'',
        password:'',
        loading:false,
        isSuccess:false
    })

    useEffect(() => {
        if( AsyncStorage.getItem("token") === credentials.token) {
            homeScreen()
        }
    }, []);

    const onChangeId = (text) => {
        console.log(text)
        setState({
            ...state,
            id:text
        })
    } 

    const onChangePass = (text) => {
        console.log(text)
        setState({
            ...state,
            password:text
        })
    } 

    const onPress = () => {
        if( isEmpty(state.id) || isEmpty(state.password) ) {
            Alert.alert("Invalid", "User Id or password must be fill in")
            return
        }

        if( credentials.userId !== state.id && credentials.password !== state.password ) {
            Alert.alert("Invalid", "Wrong User Id or password mismatched")
            return
        }

        AsyncStorage.setItem("token", credentials.token)
            .then(()=>{
                homeScreen()
            })
    }

    return( 
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.header}>
                    <Text style={{fontSize:20}}>
                        Log in
                    </Text>
                </View>
               
                <InputText
                    placeholder={"Enter User ID"}
                    autoCompleteType="username"
                    placeholderTextColor={"#ccc"}
                    onChange={onChangeId}
                    value={state.id}
                />

                <InputText
                    placeholder={"Enter password"}
                    onChange={onChangePass}
                    placeholderTextColor={"#ccc"}
                    textContentType={'password'}
                    secureTextEntry={true}
                    value={state.password}
                />

                <Button
                    label={"Sign In"}
                    variant="contained"
                    onPress={onPress}
                />

          </View>
      </View>
    )
}

export default Login