import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'

export default function NewPostScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <AddNewPost/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#151414',
        width:'100%'
    }
})