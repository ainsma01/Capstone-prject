import React, {Component} from 'react';
import { Button,StyleSheet, Text, View, ImageBackground} from 'react-native';
import Login from './components/Login';
import {createDrawerNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen'
import Settings from './Settings'
import Community from './Community'
import Dining from './Dining'
import DiningServices from './DiningServices'
import Package from './Package'

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}
const navigationOptions = function(props) {
  return {
    headerLeft: <Button onPress={() => props.navigation.navigate('DrawerOpen')} title= "=" />
  }
};
const AppDrawerNavigator = createDrawerNavigator({
  Login: Login,
  Home: HomeScreen,
  "Dining Menus": Dining,
  "Dining Services": DiningServices,
  Community: Community,
  "Package Check": Package,
  Settings: Settings
  
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
})


