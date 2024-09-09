import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import HighCard from '@/components/HighCard'

const HighLighted = () => {
  return (
<ScrollView horizontal={true} >

    <View style={{flexDirection:'row',}}>
      <HighCard
        imgs={require('./assets/images/sweet.jpg')}
        h={4}
        m={5}
        rating={7.8}
        title='The Witcher'
        type='Season'
/>

<HighCard
        imgs={require('./assets/images/app.jpg')}
        h={4}
        m={5}
        rating={7.5}
        title='The Planet of Kindom of Apps'
        type='Movie'
        />
      <HighCard
        imgs={require('./assets/images/wit.jpg')}
        h={4}
        m={5}
        rating={7.2}
        title='The Witcher'
        type='Season'
        />

    </View>
        </ScrollView>
  )
}

export default HighLighted