import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class ProfileView extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={require('./assets/profile.jpg')}/>

                <Text style={styles.name}>
                  Clif Presser
                </Text>
            </View>
          </View>

            <View style={styles.bodyContent}>
              <Text style={styles.textInfo}>
                cpresser@gettysburg.edu
              </Text>
          
              <Text style={styles.textInfo}>
                Campus Box: 0014
              </Text>
            
              <Text style={styles.textInfo}>
                Student ID: 5956066 
              </Text>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: 'orange'
  },
  header:{
    backgroundColor: "#3498db",
    height: 350
  },
  headerContent:{
    padding:70,
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 63,
    borderWidth: 8,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  textInfo:{
    fontSize:21,
    marginTop:5,
    color: "white",
    fontWeight: "bold"
  }
});
