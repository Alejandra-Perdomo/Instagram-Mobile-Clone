import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, {useState} from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'

export const BottomTabIcons=[
  {
    name:'home',
    active: require('../../assets/home.png'),
    inactive: require('../../assets/homeInactive.png')
  },
  {
    name:'search',
    active: require('../../assets/searchIcon.png'),
    inactive: require('../../assets/searchIconInactive.png')
  },
  {
    name:'reels',
    active: require('../../assets/reels.png'),
    inactive: require('../../assets/reelsInactive.png')
  },
  {
    name:'shop',
    active: require('../../assets/shop.png'),
    inactive: require('../../assets/shopInactive.png')
  },
  {
    name:'profile',
    active: require('../../assets/AleTheGreat.jpg'),
    inactive: require('../../assets/AleTheGreat.jpg')
  }
]

export default function BottomTabs({icons}) {

  const [activeTab,setActiveTab] = useState('home');

  const Icon=({icon})=>(
    <TouchableOpacity onPress={()=>setActiveTab(icon.name)}>
      <Image source={activeTab == icon.name ? icon.active : icon.inactive} 
      style={[styles.icon,icon.name === 'profile'? styles.profilePic() : null,
      activeTab=='profile'&&icon.name=='profile'?styles.profilePic(activeTab):null]}/>
    </TouchableOpacity>
  )

  return (
  <View style={styles.wrapper}>
    <Divider width={1} orientation='vertical'/>
    <View style={styles.container}>
      {icons.map((icon,index)=>(
        
        <Icon icon={icon} key={index} />
      ))}
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    position:'absolute',
    zIndex:10,
    bottom:0,
    width:'100%',
    backgroundColor:'#000'
  },
  container:{
    flexDirection:'row',
    justifyContent:'space-around',
    height:50,
    paddingTop:10,
  },
  icon:{
    width:30,
    height:30
  },
  profilePic:(activeTab='')=>({
    borderRadius:50,
    borderWidth:activeTab=='profile'?2:0,
    borderColor:'white'
  })
})