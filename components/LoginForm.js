import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import { createStackNavigator } from 'react-navigation'; 

import HomeScreen from '../HomeScreen'

export default class LoginForm extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <TextInput 
                    placeholder = "Username"
                    placeholderTextColor = "white"
                    style = {styles.input}
                />
                <TextInput
                    placeholder = "Password"
                    placeholderTextColor = "white"
                    secureTextEntry
                    style = {styles.input}
                />

                <TouchableOpacity style = {styles.buttonContainer} onPress = {() => Alert.alert("Welcome to the App")}>
                    <Text style = {styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'orange',
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor:'#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
})