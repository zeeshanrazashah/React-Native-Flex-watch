import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Search from './Search'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const AppHeader = () => {
  return (
    <View style={{ padding: 10, backgroundColor: 'black',opacity:0.9}}>
    <View style={{marginHorizontal:20, flexDirection:'row',  justifyContent:'space-between',}}>
    <Entypo name="menu" size={30} color="white" style={{paddingTop:10}}/>
      <Text style={{fontSize: 25,margin: 5,alignSelf: 'center',color: '#22d3ee',fontWeight: '600'}}>
<View style={{transform:[{rotate:'-50deg'}],  borderRadius:20, margin:5,elevation:100,shadowColor:'cyan'}}>

        <MaterialCommunityIcons name="palette-swatch" size={30} color="#22d3ee"  />
</View>
         FlexWatch
        </Text>
<TouchableOpacity>

        <FontAwesome name="search" size={24} color="cyan" style={{paddingTop:10}} />
</TouchableOpacity>
    </View>
    </View>
  )
}

export default AppHeader