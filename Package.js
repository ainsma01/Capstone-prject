import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import { Event, Icon, Button, Container, Header, Content, Left} from 'native-base';

export default class Package extends Component {
    constructor(props) {
    super(props);
      this.state = {text: ""}; 
      this.handleChange = this.handleChange.bind(this);
      this.checkIfHasPackage = this.checkIfHasPackage.bind(this);
    }

    checkIfHasPackage(studentID) {
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
      var ID = event.nativeEvent.text;
      //If text is the length of an ID
      if(ID.length == 7){
        this.checkIfHasPackage(ID);
      }
    }

    render() {
        return (
            <View style = {styles.container}>
              <Text>
                {this.state.text}
              </Text>
              <TextInput
                style={{height: 50, width:200}}
                placeholder="Enter Student ID here."
                onChange={this.handleChange}
              />
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
    }
});
