
import React, { Component } from 'react'
import { View, WebView, StyleSheet } from 'react-native'
const PrintOn = () => {
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'http://138.234.72.69/cps/Login' }}
         />
      </View>
   )
}
export default PrintOn;

const styles = StyleSheet.create({
   container: {
      height: 700
   }
})