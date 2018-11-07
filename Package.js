import React, {Component} from 'react';
import {View, AsyncStorage, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';

import { Event, Icon, Button, Container, Header, Content, Left} from 'native-base';

export default class Package extends Component {
    constructor(props) {
    super(props);
      this.state = {text: ""}; 
      this.handleChange = this.handleChange.bind(this);
      this.checkIfHasPackage = this.checkIfHasPackage.bind(this);
    }

    checkIfHasPackage(studentID) {
      console.log('https://api.cloudmine.me/v1/app/6c7bfc297efc4ab294bbf22ed23c7701/run/SearchGettysburgPackages?studentid='+studentID);
      return fetch('https://api.cloudmine.me/v1/app/6c7bfc297efc4ab294bbf22ed23c7701/run/SearchGettysburgPackages?studentid='+studentID, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-CloudMine-ApiKey': 'fb60033770f44aa6ab8577e907223d6c',
        },
      })
          .then((response) => response.json())
          //If the API returned JSON data
          .then((responseJson) => {
            //console.log(responseJson.result)
            //Set the text view to be the repsonse JSON
            //Will need to do more parsing here later
            var responseString = JSON.stringify(responseJson)
              this.setState({
                text: JSON.stringify(responseJson),
              });

          })
          //
          .catch((error) =>{
            console.error(error);
          });
    }

    handleChange(event) {
      console.log("pressed");
      this.retrieveItem("userId").then((userId) => {
                this.checkIfHasPackage(userId);
              }).catch((error) => {
              //this callback is executed when your Promise is rejected
              console.log('Promise is rejected with error: ' + error);
              }); 
    }
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
        return (
            <View style = {styles.container}>
              <Text>
                {this.state.text}
              </Text>
              <TouchableOpacity 
                  style = {styles.buttonContainer} 
                  onPress={this.handleChange}
                >
                    <Text style = {styles.buttonText}>Check For Packages</Text>
                </TouchableOpacity>
             </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
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
});
