import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import { createStackNavigator } from 'react-navigation'; 
import { withNavigation } from 'react-navigation';
import { AsyncStorage } from "react-native"
import HomeScreen from '../HomeScreen'

class LoginForm extends Component {
  constructor(props) {
    super(props);
      this.state = {username: "", password: ""}; 
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handlePassChange = this.handlePassChange.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
    }
    handlePassChange(event){
      var pass = event.nativeEvent.text;
      this.setState({
        password: pass,
      });
    }
    handleUserChange(event){
      var user = event.nativeEvent.text;
      this.setState({
        username: user,
      });
    }
    handleLogin(event){
      var username = this.state.username
      var password = this.state.password
      if(username=="admin" && password=="admin"){
        this.props.navigation.navigate('DrawerStack')
        //get studentID from DB
        var userId = "5779354";
        this.storeItem("userId", userId);
      }
    }
    //the functionality of the retrieveItem is shown below
    async retrieveItem(key) {
      try {
        const retrievedItem =  await AsyncStorage.getItem(key);
        const item = JSON.parse(retrievedItem);
        return item;
      } catch (error) {
        console.log(error.message);
      }
      return
    }
    async storeItem(key, item) {
      try {
          //we want to wait for the Promise returned by AsyncStorage.setItem()
          //to be resolved to the actual value before returning the value
          var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
          return jsonOfItem;
      } catch (error) {
        console.log(error.message);
      }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {styles.container}>
                <TextInput 
                    placeholder = "Username"
                    placeholderTextColor = "white"
                    onChange={this.handleUserChange}
                    style = {styles.input}
                />
                <TextInput
                    placeholder = "Password"
                    placeholderTextColor = "white"
                    secureTextEntry
                    onChange={this.handlePassChange}
                    style = {styles.input}
                />
                <TouchableOpacity 
                  style = {styles.buttonContainer} 
                  onPress={this.handleLogin}
                >
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
export default withNavigation(LoginForm);
