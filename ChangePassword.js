
import React, { Component } from 'react'
import { View, WebView, StyleSheet } from 'react-native'
const ChangePassword = () => {
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://pset.gettysburg.edu/smop/ChangePasswordDirect.aspx' }}
         />
      </View>
   )
}
export default ChangePassword;

const styles = StyleSheet.create({
   container: {
      height: 700
   }
})
