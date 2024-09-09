import React from 'react'
import { View, Text, Button, Pressable, Image } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Heading from './Heading'
import WatchCard from './WatchCard';

const ContinueWatch = () => {
  return (
    <View style={{ backgroundColor: 'black', opacity:0.9,elevation:100,shadowColor:'cyan'}}>

      <View style={{ flexDirection: 'row-reverse' }}>
        <WatchCard
          imgs={require('../app/assets/images/wit.jpg')}
          h={1}
          m={52}
        />

<WatchCard
          imgs={require('../app/assets/images/sweet.jpg')}
          h={1}
          m={42}
        />

        <WatchCard
          imgs={require('../app/assets/images/app.jpg')}
          h={1}
          m={42}
        />


      </View>
    </View>


  )
}

export default ContinueWatch