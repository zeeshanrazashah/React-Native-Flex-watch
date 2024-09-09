import React from 'react'
import Heading from '@/components/Heading'
import { View, Text,ImageBackground,TouchableOpacity,Image } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import GenraCard from '@/components/GenraCard';


const GenraScreen= () => {
  return (
    <View style={{backgroundColor:'white'}}>
<GenraCard
imgbg={require('./assets/images/app.jpg')}
title='Fantasy'
/>


<GenraCard
imgbg={require('./assets/images/app.jpg')}
title='Fantasy'
/>
<GenraCard
imgbg={require('./assets/images/app.jpg')}
title='Fantasy'
/>


    </View>


)}

export default GenraScreen