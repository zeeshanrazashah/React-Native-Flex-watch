import { View, Text,Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { transform } from '@babel/core';

interface P {
imgup:any
title:string
rating:number
story:string
type:string
}

const UpCard:React.FC<P> = ({imgup,title,rating,story,type}) => {
  return (

    <View style={{gap:5,justifyContent:'center',alignItems:'center',backgroundColor:'black',}}>

    <View style={{backgroundColor:'black', margin:5,padding:10,borderRadius:20, gap:20,alignItems:'center'}}>
      <View style={{flexDirection:'row',gap:20,opacity:0.9,}}>
<View>

<View style={{overflow:'hidden',height:149,width:159, borderBottomEndRadius:100,borderEndWidth:2,borderColor:'cyan',}}>
<Image style={{height:148,width:160,}}
source={imgup}
/></View>
</View>

     <View>

      <Text style={{color:'white',fontSize:17,fontWeight:'500',alignItems:'center',}}>
        {title}</Text>
        <View style={{flexDirection:'row',gap:5}}>
          <Text style={{color:'gray'}}>{type}</Text>
        <Text style={{color:'cyan',fontWeight:'900'}}>{rating}</Text>
        <MaterialCommunityIcons name="star" size={25} color="gold" />
        </View>

        <View style={{backgroundColor:'gray',margin:3,borderRadius:10,alignItems:'center',opacity:0.9,shadowColor:'cyan',elevation:100}}>
        <Text style={{color:'white',fontSize:13,}}>
          Story</Text>
        <Text style={{color:'white',fontSize:11,padding:10,width:170,}}>
       {story}</Text>
        </View>

     </View>

      </View>
    </View>
    </View>
  )
}

export default UpCard