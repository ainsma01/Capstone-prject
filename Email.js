import React, { Component } from 'react'
import { View, WebView, StyleSheet } from 'react-native'
const Email = () => {
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://outlook.com/owa/gettysburg.edu' }}
         />
      </View>
   )
}
export default Email;

const styles = StyleSheet.create({
   container: {
      height: 700
   }
})
