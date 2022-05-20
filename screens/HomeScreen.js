import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import {posts} from '../data/posts'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Stories/>
      <ScrollView>
        {posts.map((post,index)=>(
          <Post post={post} key={index}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#151414',
        width:'100%',
        flex:1,
    }
})