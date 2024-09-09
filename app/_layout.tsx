import React from 'react'
import { t } from 'react-native-tailwindcss';
import { Stack } from 'expo-router';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import GenraScreen from './GenraScreen';
import AppHeader from '@/components/AppHeader';
import AppPlayer from './AppPlayer';
import ContinueWatch from '@/components/ContinueWatch';
import Heading from '@/components/Heading';
import HighLighted from './HighLighted';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import { View, Text, ScrollView, } from "react-native";
import SeasonHome from './SeasonHome';
import Update from './(tabs)/Update';
import UpCard from '@/components/UpCard';

function _layout() {

  return (<>
  <View style={{backgroundColor:'black',height:45,opacity:0.9,}}/>

  <AppHeader/>
 <Stack>
<Stack initialRouteName='Update' screenOptions={{
  headerShown:false,
  
}}/>


 </Stack>
</>)
}

export default _layout
