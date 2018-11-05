import React, {Component} from 'react'
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native'
import LoginForm from './LoginForm';

export default class Login extends Component{
    render(){
        return(
            <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.container}>
                    <View style = {styles.logoContainer}>
                        <Image
                            style = {styles.logo}
                            source = {require('../assets/logo.png')}
                        />
                        <Text style={styles.title}>Digest Mobile</Text>
                    </View>

                <View style = {styles.formContainer}>
                    <LoginForm />
                </View>

                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 150,
        height: 200
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 150,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },

}); 