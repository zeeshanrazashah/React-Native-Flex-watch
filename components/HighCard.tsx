import React from 'react'
import { View, Text, Button, Pressable, Image,TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface P {
  imgs:any
  h:number
  m:number
rating:number
title:string
type:string
}

const HighCard:React.FC<P> = ({imgs,m,h,rating,title,type}) => {
  return (
    <View style={{ backgroundColor: 'black', opacity:0.9,}}>
<TouchableOpacity>

      <View style={{borderRadius:20, justifyContent:'center', alignItems:'center'}}>
        <View style={{ borderRadius: 20, overflow: 'hidden', height: 199, width: 370,elevation:100,shadowColor:'cyan',marginHorizontal:10,}}>
          <Image style={{ height: 200, width: 369,}}
            source={imgs}/>
<View style={{position: 'absolute',left:0,top:0,elevation:100,shadowColor:'#ea580c',backgroundColor:'black', padding:11,borderBottomEndRadius:20,}}>
          <FontAwesome5 name="fire-alt" size={20} color="#ea580c" />
</View>

<View style={{elevation:100,shadowColor:'#22d3ee',opacity:0.5,position:'absolute', bottom:0, left:0,backgroundColor:'black',borderRadius:5,padding:15,}}>
  <Text style={{color:'#22d3ee',fontWeight:'900',}}>
  <Text style={{color:'gold', marginVertical:5,fontWeight:'900'}}>{rating}...</Text>
  {title}</Text>
  <Text style={{color:'white'}}>{type}  /
  <Text style={{ color: "gray", opacity:0.6, fontWeight: '600', padding: 5, borderRadius: 5, position: 'absolute', backgroundColor:'black' }}>
            {h}
            <Text style={{color:'cyan'}}>
            h
            </Text>
            <Text style={{color:'white'}}> : </Text>
            {m}
           <Text style={{color:'cyan'}}>m</Text> </Text>
  </Text>
  </View>
         </View>
      </View>
         </TouchableOpacity>
    </View>


  )
}

export default HighCard