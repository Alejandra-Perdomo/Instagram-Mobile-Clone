import { StyleSheet,SafeAreaView, ScrollView } from 'react-native'
import React,{useEffect} from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import {posts} from '../data/posts'
import BottomTabs, { BottomTabIcons } from '../components/home/BottomTabs'
import {db} from '../firebase'
import {getDocs, collectionGroup} from "firebase/firestore";

export default function HomeScreen({navigation}) {

 /*  useEffect(async()=>{
    const querySnapshot = await getDocs(collectionGroup(db, "posts"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });

  },[]) */

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