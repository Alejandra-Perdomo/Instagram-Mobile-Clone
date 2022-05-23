import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import NewPostScreen from './screens/NewPostScreen'

const Stack = createStackNavigator()

const screenOptions = {
    headerShown:false,
}

export default function NavigationRoutes() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions}>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='NewPostScreen' component={NewPostScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})