import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

interface H {
title:string
IconComponent:React.ComponentType<any>
iconName:string
iconSize:number
iconColor:string
}
const Heading:React.FC<H> = ({title,IconComponent,iconColor,iconName,iconSize}) => {
  return (
    <View style={{ backgroundColor: 'black',padding:10, flexDirection:'row',justifyContent:'space-between'}}>
      <View style={{flexDirection:'row'}}>

      <IconComponent name={iconName} size={iconSize} color={iconColor}  />
      <Text style={{ fontSize: 15, color: 'white', fontWeight: '800',margin:5, justifyContent: 'center', alignSelf: 'flex-start' }}>
        {title}
      </Text>
      </View>
      <View style={{justifyContent:'center',backgroundColor:'#22d3ee',opacity:0.7, padding:5,borderRadius:5}}>
      <SimpleLineIcons name="arrow-right" size={15} color="white"/>
      </View>
    </View>
  )
}

export default Heading