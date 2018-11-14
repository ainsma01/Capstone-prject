
import React, { Component } from 'react'
import { View, WebView, StyleSheet } from 'react-native'
const ClassSearch = () => {
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://mobile.gettysburg.edu/app/catalog/classSearch' }}
         />
      </View>
   )
}
export default ClassSearch;

const styles = StyleSheet.create({
   container: {
      height: 700
   }
})