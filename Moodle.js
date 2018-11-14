
import React, { Component } from 'react'
import { View, WebView, StyleSheet } from 'react-native'
const Moodle = () => {
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://www.gettysburg.edu/current_students/learning_management/' }}
         />
      </View>
   )
}
export default Moodle;

const styles = StyleSheet.create({
   container: {
      height: 700
   }
})