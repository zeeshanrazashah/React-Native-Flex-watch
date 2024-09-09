import React from 'react'
import { View, Text, Button, Pressable, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface P {
  imgs: any
  h: number
  m: number
}

const WatchCard: React.FC<P> = ({ imgs, m, h },) => {
  return (
    <View style={{ backgroundColor: 'black', opacity: 0.9 }}>
      <Pressable>
        <View style={{ flexDirection: 'row', }}>
          <View style={{ borderRadius: 20, overflow: 'hidden', height: 99, width: 199, margin: 10 }}>
            <Image style={{ height: 100, width: 200, }}
              source={imgs} />

            <View style={{ position: 'absolute', left: 4, top: 4, elevation: 100, shadowColor: 'cyan', backgroundColor: '#485563', borderRadius: 10, padding: 3, }}>
              <MaterialCommunityIcons name="play-box-multiple" size={25} color="cyan" />
            </View>
            <Text style={{ color: "white", right: 0, bottom: 0, fontWeight: '100', padding: 3, borderRadius: 5, position: 'absolute', backgroundColor: 'black', fontSize: 11 }}>
              {h}h {m}m</Text>
          </View>
        </View>
      </Pressable>
    </View>


  )
}

export default WatchCard