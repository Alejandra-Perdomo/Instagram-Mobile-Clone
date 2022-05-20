import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'

export default function Post({post}) {
  return (
    <View style={{marginBottom:30}}>
        <Divider width={1} orientation='vertical'/>
        <PostHeader post={post}/>
    </View>
  )
}

const PostHeader=({post})=>(
  <View style={postHeader.outerContainer}>
    <View style={postHeader.outerContainer}>
      <Image style={postHeader.userProfilePic} source={{uri:post.user.image}}/>
      <Text style={postHeader.text}>{post.user.user}</Text>
    </View>
    <Text style={postHeader.threeDots}>...</Text>
  </View>
)

const postHeader = StyleSheet.create({
  outerContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:5,
    alignItems:'center'
  },
  container:{
    flexDirection:'row'
  },
  userProfilePic:{
    width:35,
    height:35,
    borderRadius:50,
    marginLeft:6,
    borderWidth:1.6,
    borderColor:'#ff8501',
  },
  text:{
    color:'white',
    marginLeft:5,
    fontWeight:'700'
  },
  threeDots:{
    color:'white',
    fontWeight:'900'
  }
})