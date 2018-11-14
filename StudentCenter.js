
import React, { Component } from 'react'
import { View, WebView, StyleSheet } from 'react-native'
const StudentCenter = () => {
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://psinfo1.gettysburg.edu/psp/SA8PROD/EMPLOYEE/SA/h/?tab=DEFAULT&cmd=login&errorCode=105&languageCd=ENG' }}
         />
      </View>
   )
}
export default StudentCenter;

const styles = StyleSheet.create({
   container: {
      height: 700
   }
})