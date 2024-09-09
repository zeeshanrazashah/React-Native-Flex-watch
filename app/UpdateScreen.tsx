import { View, Text ,Image, ScrollView} from 'react-native'
import React from 'react'
import AppHeader from '@/components/AppHeader'
import UpCard from '@/components/UpCard'

const UpdateScreen = () => {
  return (
    <ScrollView style={{}}>
<UpCard
imgup={require('../assets/images/sweet.jpg')}
title='SweetHome'
type='Season'
rating={8.3}
story='Its series based on Anime name Sweet Home there is a virus come that make people monster deeds'
/>

<UpCard
imgup={require('../assets/images/sweet.jpg')}
title='SweetHome'
type='Season'
rating={8.3}
story='Its series based on Anime name Sweet Home there is a virus become people monster on its deeds'
/>

<UpCard
imgup={require('../assets/images/app.jpg')}
title='SweetHome'
type='Season'
rating={8.3}
story='Its series based on Anime name Sweet Home there is a virus come that make people monster deeds'
/>

<UpCard
imgup={require('../assets/images/app.jpg')}
title='The Kingdom of Apps'
type='Season'
rating={8.3}
story='Its series based on Anime name Sweet Home there is a virus come that make people monster deeds'
/>

    </ScrollView>
  )
}

export default UpdateScreen