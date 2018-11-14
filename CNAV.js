
import React, { Component } from 'react'
import { View, WebView, StyleSheet } from 'react-native'
const CNAV = () => {
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://cnav.gettysburg.edu/index.cfm' }}
         />
      </View>
   )
}
export default CNAV;

const styles = StyleSheet.create({
   container: {
      height: 700
   }
})