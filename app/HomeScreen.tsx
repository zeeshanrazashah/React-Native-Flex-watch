import React from 'react'
import ContinueWatch from '@/components/ContinueWatch';
import Heading from '@/components/Heading';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import AppHeader from '@/components/AppHeader';
import HighLighted from './HighLighted';
import { View, Text, ScrollView } from "react-native";
import SeasonHome from './SeasonHome';
import MoviesHome from './MovieHome';
import KDramasHome from './KDramasHome';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const HomeScreen = () => {
  return (
    <>
      <View style={{ backgroundColor: 'black', opacity: 0.9, }} />

      <ScrollView style={{}}>
        <HighLighted />
        <View style={{ backgroundColor: 'black' }}>

          <Heading
            IconComponent={MaterialCommunityIcons}
            iconName='animation-play'
            iconColor='cyan'
            iconSize={25}
            title='Continue Watching'
          />

          <ScrollView horizontal={true}>
            <ContinueWatch />
          </ScrollView>

          <Heading
            IconComponent={Feather}
            iconName='airplay'
            iconColor='cyan'
            iconSize={25}
            title='Seasons'
          />
          <ScrollView horizontal={true}>
            <SeasonHome />
          </ScrollView>

          <Heading
            IconComponent={MaterialCommunityIcons}               
            iconName='movie-open-play-outline'
            iconColor='cyan'
            iconSize={25}
            title='Movies'
          />
          <ScrollView horizontal={true}>
            <MoviesHome />
          </ScrollView>

          <Heading
            IconComponent={FontAwesome}
            iconName='xing'
            iconColor='cyan'
            iconSize={25}
            title='- Dramas'
          />
          <ScrollView horizontal={true}>
            <KDramasHome />
          </ScrollView>
        </View>
      </ScrollView>
    </>
  )
}

export default HomeScreen