/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Button, View} from 'react-native';

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
    formContainer: {
      backgroundColor: 'white',
      justifyContent: 'center',
      margin: 15,
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
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    buttonText: {
      color: 'white',
    },
    inputText:{
        height: 40, 
        borderColor: '#ddd',
        borderWidth: 1
    }
  })

const Home: () => React$Node = () => {
    const [state, setState] = useState({
        id:'',
        password:'',
        loading:false,
        isSuccess:false
    })

    return(
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text>Home</Text>

          </View>
      </View>
    )
}

export default Home