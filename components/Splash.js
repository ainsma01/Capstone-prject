import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
export default class Splash extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1,
        allignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bolb',
        fontSize: 18
    }
})