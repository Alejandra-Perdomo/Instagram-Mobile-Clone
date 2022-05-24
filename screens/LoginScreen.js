import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/instagram-logo.png')}/>
      </View>
      <LoginForm/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:50,
        paddingHorizontal:12
    },
    logoContainer:{
        alignItems:'center',
        marginTop:60,
    }
})