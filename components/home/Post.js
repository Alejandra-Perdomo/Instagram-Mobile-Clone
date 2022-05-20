import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const iconsArray=[require('../../assets/heart-icon.png'),
require('../../assets/comment.png'),
require('../../assets/share.png'),
require('../../assets/save.png')];

export default function Post({post}) {
  return (
    <View style={{marginBottom:30}}>
        <Divider width={1} orientation='vertical'/>
        <PostHeader post={post}/>
        <PostImage post={post}/>
        <View style={{marginHorizontal:15,marginTop:10}}>
        <PostFooter post={post}/>
        <Likes post={post}/>
        </View>
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

const PostImage=({post})=>(
  <View style={{width:'100%',height:450}}>
  <Image source={{uri:post.imageUrl}}
  style={{height:'100%',resizeMode:'cover'}}
  />
  </View>
)

const PostFooter=({post})=>(
  <View style={{flexDirection:'row'}}>
    <View style={footer.leftIconsContainer}>
      <Icon imgStyle={footer.footerIcons} path={iconsArray[0]}/>
      <Icon imgStyle={footer.footerIcons} path={iconsArray[1]}/>
      <Icon imgStyle={footer.footerIcons} path={iconsArray[2]}/>
    </View>
    <View style={{flex:1,alignItems:'flex-end'}}>
      <Icon imgStyle={footer.footerIcons} path={iconsArray[3]}/>
    </View>
  </View>
)

/* NOTE Inherit 2 different styles like this: style={[styles.style1,styles.style2]} */

const Icon=({imgStyle,path})=>(
  <TouchableOpacity>
    <Image style={imgStyle} source={path}/>
  </TouchableOpacity>
)

const Likes=({post})=>(
  <View style={{flexDirection:'row',marginTop:5}}>
  <Text style={{color:'white'}}>{post.likes.toLocaleString('en')} Likes</Text>
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

const footer = StyleSheet.create({
  footerIcons:{
    width:33,
    height:33
  },
  leftIconsContainer:{
    flexDirection:'row',
    width:'32%',
    justifyContent:'space-between'
  }
})