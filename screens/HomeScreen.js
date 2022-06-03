import { StyleSheet,SafeAreaView, ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
/* import {posts} from '../data/posts' */
import BottomTabs, { BottomTabIcons } from '../components/home/BottomTabs'
import {db} from '../firebase'
import {getDocs, collectionGroup} from "firebase/firestore";

export default function HomeScreen({navigation}) {

  const [posts, setPosts] = useState([]);
  const [postID, setPostID] = useState([])

  const loadPosts = async() =>{
    let postsList=[];
    let postsIdsLists=[];
    const querySnapshot = await getDocs(collectionGroup(db, "posts"));
    querySnapshot.forEach(doc => postsList.push(doc.data()))
    querySnapshot.forEach(doc => postsIdsLists.push(doc.id))
    setPosts(postsList);
    setPostID(postsIdsLists);
  }

  useEffect(()=>{
    loadPosts();
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/>
      <Stories/>
      <ScrollView>
        {posts.map((post,index)=>(
          <Post post={post} key={index} postID={postID[index]} loadPosts={loadPosts}/>
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