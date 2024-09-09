import React from 'react';
import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import HomeScreen from '../HomeScreen';
import GenraScreen from '../GenraScreen';

const _layout: React.FC = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          opacity: 0.9,
          elevation: 100,
          shadowColor: 'cyan'
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: React.ComponentProps<typeof AntDesign>['name'] | React.ComponentProps<typeof Entypo>['name'] = 'home';

          if (route.name === 'home') {
            iconName = 'home';color
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === 'genra') {
            iconName = 'archive'; // Genra uses the 'archive' icon
            return <Entypo name={iconName} size={size} color={color} />;
          }

          // Default icon if no route matches
          return <AntDesign name='home' size={size} color={color} />;
        },
        tabBarActiveTintColor: 'cyan', // Color of the icon when active
        tabBarInactiveTintColor: 'gray', // Color of the icon when inactive
      })}
    >


      <Tabs.Screen name="home"  />
      <Tabs.Screen name="genra" />
      <Tabs.Screen name="Update" />
    </Tabs>
  );
};

export default _layout;
