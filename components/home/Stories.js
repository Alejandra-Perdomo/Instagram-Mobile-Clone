import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import React from 'react';
import {users} from '../../data/users'

export default function Stories() {
  return (
    <View style={{marginBottom:13}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {users.map((story,index)=>(
                <View key={index} style={{alignItems:'center'}}>
                    <Image style={styles.story} source={{uri:story.image}}/>
                    <Text style={styles.storyUserName}>{
                        story.user.length > 10 ? story.user.slice(0,10).toLowerCase() +'...'
                        :story.user.toLowerCase()
                    }</Text>
                </View>
            ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    story:{
        width:70,
        height:70,
        borderRadius:50,
        marginLeft:6,
        borderWidth:2,
        borderColor:'#ff8501',
    },
    storyUserName:{
        color:'white',
    }
})