import React, { Component } from 'react'
import { View, WebView, StyleSheet } from 'react-native'
const Dining = () => {
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'http://www.gettysburg.edu/current_students/menu.dot' }}
         />
      </View>
   )
}
export default Dining;

const styles = StyleSheet.create({
   container: {
      height: 700
   }
})