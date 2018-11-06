import React, { Component } from 'react'
import { View, WebView, StyleSheet } from 'react-native'
const DiningServices = () => {
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://dining.gettysburg.edu/OneWeb/Account/LogOn' }}
         />
      </View>
   )
}
export default DiningServices;

const styles = StyleSheet.create({
   container: {
      height: 700
   }
})
