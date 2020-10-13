/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {TextInput , StyleSheet, TouchableHighlight, View, Text} from 'react-native';


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
    },
    button: {
      height: 40,
      backgroundColor:"#E04081",
      color:'#fff',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:10,
    },
    buttonText: {
      color: 'white',
    },
    inputText:{
        height: 40, 
        padding:12,
        borderRadius: 4,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom:10
    }
  })

  const Login: () => React$Node = () => {
    const [state, setState] = useState({
        id:'',
        password:'',
        loading:false,
        isSuccess:false
    })

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

    }

    return(
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={styles.header}>
                    <Text style={{fontSize:20}}>
                        Log in
                    </Text>
                </View>
               
                <TextInput
                    style={styles.inputText}
                    placeholder={"Please enter User ID"}
                    placeholderTextColor={"#ccc"}
                    onChangeText={text => onChangeId(text)}
                    value={state.id}
                />

                <TextInput
                    style={styles.inputText}
                    placeholder={"Please enter password"}
                    onChangeText={text => onChangePass(text)}
                    placeholderTextColor={"#ccc"}
                    textContentType={'password'}
                    value={state.id}
                />

                <TouchableHighlight
                    onPress={onPress}
                    style={styles.button}
                  
                >
                    <Text style={{color:'#fff'}}>Sign In</Text>
                </TouchableHighlight>

          </View>
      </View>
    )
}

export default Login