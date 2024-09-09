import React from 'react'
import Heading from '@/components/Heading'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Text,ImageBackground,TouchableOpacity,Image,ScrollView,FlatList } from 'react-native'



const DetailScreen = () => {
  return (
<ScrollView>


    <View style={{backgroundColor:'black',gap:50}}>
<View>
   <ImageBackground style={{justifyContent:'center',height:220,width:'auto',opacity:0.5,backgroundColor:'black',}}
    resizeMode='cover'
    source={require('./assets/images/seri.jpg')}/>

<View style={{position:'absolute', bottom:-50, backgroundColor:'black',borderRadius:20, height:149,width:149, overflow:'hidden', marginLeft:10, elevation:100, shadowColor:'cyan'}}>
<Image source={require('../app/assets/images/app.jpg')} style={{height:150,width:150,opacity:1,backgroundColor:'black'}} resizeMode='cover'  />

<View style={{alignSelf:'flex-start',marginRight:20,marginTop:5,position:'absolute', flexDirection:'row'}}>
<Text style={{color:'black',margin:11,fontWeight:'bold', zIndex:5,position:'absolute',fontSize:8}}>
  7.8</Text>
<MaterialCommunityIcons name="star" size={34} color="gold" />
</View>
</View>
    </View>
    <View style={{flexDirection:'row', marginLeft:10}}>
<Text style={{color:'white', alignSelf:'flex-end',margin:5,fontWeight:'900',width:200}}>
  The Kingdom Planet Of Apps</Text>
<View style={{}}>
<Text style={{color:'gray', alignSelf:'flex-end',margin:5,fontWeight:'700',width:200}}>
  1
  <Text style={{color:'cyan', alignSelf:'flex-end',margin:5,fontWeight:'700',width:200}}>
    h</Text>
    <Text style={{color:'white'}}> : </Text>
  48
 <Text style={{color:'cyan', alignSelf:'flex-end',margin:5,fontWeight:'700',width:200}}>
  min
  </Text>
 </Text>
<Text style={{color:'gray', alignSelf:'flex-end',margin:5,fontWeight:'700',width:200}}>
  Movie/Fantasy</Text>
</View>

</View>
<View style={{alignSelf:'flex-end',elevation:100,shadowColor:'cyan',backgroundColor:'black',borderRadius:20 ,opacity:0.5,padding:20,marginHorizontal:15}}>
<Text style={{color:'white', fontSize:20, }}>
  Story</Text>
<Text style={{color:'white', fontSize:15, }}>
  Its a movie of app whre the king of apps attack on human like slaves Its a movie of app whre the king of apps attack on human like slaves
  </Text>
</View>

<View style={{flexDirection:'row', margin:10, gap:10, alignSelf:'center'}}>
    <TouchableOpacity style={{borderColor:'white',borderWidth:1, borderRadius:10,justifyContent:'center',alignSelf:'center', width:60,alignItems:'center'}}>
  <FontAwesome name="play" size={30} color="cyan" style={{margin:10}} />
</TouchableOpacity>

<TouchableOpacity style={{borderColor:'white',borderWidth:1,  borderRadius:10,justifyContent:'center',alignSelf:'center', width:60,alignItems:'center'}}>
<Ionicons name="download" size={30} color="cyan" style={{margin:10}} />
</TouchableOpacity>



<TouchableOpacity style={{borderColor:'white',borderWidth:1,  borderRadius:10,justifyContent:'center',alignSelf:'center', width:60,alignItems:'center'}}>
<MaterialIcons name="report" size={30} color="cyan" style={{margin:10}} />
</TouchableOpacity>

</View>

<Text style={{color:'gray', marginLeft:30,fontSize:20,fontWeight:'700'}}>Cast</Text>
<ScrollView horizontal={true}>


<View style={{flexDirection:'row'}}>
<View style={{backgroundColor:'white', height:79,width:79,alignItems:'center',overflow:'hidden', marginHorizontal:10,marginBottom:20, borderRadius:20}}>
  <Image source={require('../app/assets/images/freyaA.jpeg')} style={{height:80,width:80,justifyContent:'center',alignItems:'center' }} resizeMode='cover'/>
</View>

<View>
<Text style={{color:"white",fontSize:15,fontWeight:'700'}}>Freya Allan</Text>
<Text style={{color:"gray",fontSize:15,fontWeight:'700'}}>Mae</Text>
</View>

</View>


<View style={{flexDirection:'row'}}>
<View style={{backgroundColor:'white', height:79,width:79,alignItems:'center',overflow:'hidden', marginHorizontal:10,marginBottom:20, borderRadius:20}}>
  <Image source={require('../app/assets/images/freyaA.jpeg')} style={{height:80,width:80,justifyContent:'center',alignItems:'center' }} resizeMode='cover'/>
</View>

<View>
<Text style={{color:"white",fontSize:15,fontWeight:'700'}}>Freya Allan</Text>
<Text style={{color:"gray",fontSize:15,fontWeight:'700'}}>Mae</Text>
</View>

</View>


<View style={{flexDirection:'row'}}>
<View style={{backgroundColor:'white', height:79,width:79,alignItems:'center',overflow:'hidden', marginHorizontal:10,marginBottom:20, borderRadius:20}}>
  <Image source={require('../app/assets/images/freyaA.jpeg')} style={{height:80,width:80,justifyContent:'center',alignItems:'center' }} resizeMode='cover'/>
</View>

<View>
<Text style={{color:"white",fontSize:15,fontWeight:'700'}}>Freya Allan</Text>
<Text style={{color:"gray",fontSize:15,fontWeight:'700'}}>Mae</Text>
</View>

</View>


</ScrollView>
    </View>

    </ScrollView>
)}

export default DetailScreen