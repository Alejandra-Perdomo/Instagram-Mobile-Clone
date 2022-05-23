import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import {posts} from '../data/posts'
import BottomTabs, { BottomTabIcons } from '../components/home/BottomTabs'

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/>
      <Stories/>
      <ScrollView>
        {posts.map((post,index)=>(
          <Post post={post} key={index}/>
        ))}
      </ScrollView>
      <BottomTabs icons={BottomTabIcons}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#151414',
        width:'100%',
        flex:1,
        paddingBottom:50,
        marginTop:22
    }
})