import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import Login from './components/Login';
import {createDrawerNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen'
import Settings from './Settings'
import Community from './Community'
import Dining from './Dining'
import Package from './Package'

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Login: Login,
  Home: HomeScreen,
  Dining: Dining,
  Community: Community,
  Package: Package,
  Settings: Settings
  
})

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
})


