import React from 'react'
import Heading from '@/components/Heading'
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface P {
  imgbg: any
  title: string
}

const GenraCard: React.FC<P> = ({ imgbg, title }) => {
  return (
    <TouchableOpacity style={{ backgroundColor: 'black' }}>
      <View style={{ backgroundColor: 'black', padding: 10, borderRadius: 20, margin: 10}}>

        <View style={{ elevation: 100, shadowColor: 'cyan', shadowOpacity: 100, borderRadius: 20, height: 199, width: 'auto', backgroundColor: 'black', overflow: 'hidden', }}>
          <ImageBackground style={{ justifyContent: 'center', height: 200, width: 400, opacity: 0.5, backgroundColor: 'black' }}
            resizeMode='cover'
            source={imgbg} />

          <View style={{ position: 'absolute', top: 50, backgroundColor: 'black', borderRadius: 10, overflow: 'hidden', marginLeft: 10, elevation: 100, shadowColor: 'cyan' }}>

            <Text style={{ color: 'white', fontSize: 20, margin: 5, fontWeight: '900' }}>{title}</Text>
          </View>
        </View>
      </View>

    </TouchableOpacity>


  )
}

export default GenraCard