import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth, signOut } from '../../firebase'

export default function Header({navigation}) {

    const signOutHandler = async() =>{
     await signOut(auth).then(() => {
            // Sign-out successful.
            //console.log('Sign-out successful');
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>signOutHandler()}>
        <Image style={styles.logo} source={require('../../assets/insta-logo.png')}/>
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={()=>navigation.push('NewPostScreen')}>
            <Image style={styles.icon} source={require('../../assets/add-icon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.icon} source={require('../../assets/heart-icon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.unreadBadgeContainer}>
                <Text style={styles.unreadBadgeText}>26</Text>
            </View>
            <Image style={styles.icon} source={require('../../assets/speech-bubble-icon.png')}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:20
    },
    logo:{
        width:100,
        height:50,
        resizeMode:'contain'
    },
    iconsContainer:{
        flexDirection:'row'
    },
    icon:{
        width:30,
        height:30,
        marginLeft:10,
        resizeMode: 'contain'
    },
    unreadBadgeContainer:{
        backgroundColor:'red',
        position:'absolute',
        left:25,
        bottom:18,
        zIndex:1,
        height:18,
        minWidth:25,
        alignItems:'center',
        borderRadius:20
    },
    unreadBadgeText:{
        color:'white',
        fontWeight:'600'
    }
})