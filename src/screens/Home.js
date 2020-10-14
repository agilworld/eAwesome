/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text, FlatList } from 'react-native';
import axios from "axios"
import { isEmpty } from "lodash"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
    },

    formContainer: {
      backgroundColor: 'white',
      margin: 15,
    },
    
    item:{
        marginBottom:10,
        borderBottomColor:'#eee',
        borderBottomWidth:1,
        paddingBottom:7
    },
    title:{
        fontSize:18,
        fontWeight:"600",
    },
    email:{
        color:"#6332A2"
    },
    phone:{
        color:"#aaa"
    },
    address:{
        color:"#aaa"
    }
  })

const Item = ({item}) => (
    <View style={styles.item}>
        {console.log(item)}
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.phone}>Phone no. {item.phone}</Text>
        <Text style={styles.address}>Address. {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}</Text>
    </View>
)

const Home = (props) => {
    const [data, setData] = useState(null)
    const [state, setState] = useState({
        loading:false,
        isSuccess:false
    })

    const renderItem = ({ item }) => (
        <Item item={item} />
    )

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users', {
            timeout: 1000, // default is `0` (no timeout)
        }).then(res=>{
            console.log(res.data)
            if( ! isEmpty(res.data) ) {
                setData(res.data)
            } else {
                setData(false)
            }
        }).catch(err=>{

        })
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.formContainer}>
                {data && <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.username}
                />}
          </View>
      </View>
    )
}

export default Home