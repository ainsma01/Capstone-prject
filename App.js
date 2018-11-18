import React, {Component} from 'react';
import { Button,StyleSheet, Text, View, ImageBackground} from 'react-native';
import Login from './components/Login';
import {createDrawerNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen'
import Settings from './Settings'
import Community from './Community'
import Dining from './Dining'
import Email from './Email'
import DiningServices from './DiningServices'
import Moodle from './Moodle'
import StudentCenter from './StudentCenter'
import Package from './Package'
import { createStackNavigator } from 'react-navigation'
import { StackNavigator } from 'react-navigation'
const DrawerStack = createDrawerNavigator({
  Home: HomeScreen,
  "Dining Menus": Dining,
  "Dining Services": DiningServices,
  "Gettysburg Email": Email,
  "Moodle": Moodle,
  "Student Center": StudentCenter,
  Community: Community,
  "Package Check": Package,
  Settings: Settings
})
const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'orange'},
    title: 'Gettysburg Mobile',
    headerLeft: <Text onPress={() => navigation.openDrawer()}>Menu</Text>
  })
})
// Manifest of possible screens
const DefaultNavStack = createStackNavigator({
  LoginScreen: { screen: Login },
  DrawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
      gesturesEnabled: false
  }
})

export default DefaultNavStack;
