import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import SignupForm from '../components/signupScreen/SignupForm'

export default function SignupScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
          <Image source={require('../assets/instagram-logo.png')}/>
          <SignupForm navigation={navigation}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:50,
        paddingHorizontal:12
    },
    logoContainer:{
        alignItems:'center',
        marginTop:60,     
    }
})