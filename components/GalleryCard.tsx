import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Define the props interface
interface P {
  imgs: any; // Allow any since local images will be passed as require()
  title: string;
  gendra: string;
  rating: number;
}

const GalleryCard: React.FC<P> = ({ imgs, title, gendra, rating }) => {
  return (

      <TouchableOpacity style={{backgroundColor: 'black', justifyContent:'center', alignSelf:'center', width:115,}}>
        <View style={{alignContent: 'center', alignItems: 'center', backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', padding:1,}}>

          <View style={{ height: 111, width: 111, backgroundColor: 'black', alignItems: 'center', borderRadius: 10, overflow: 'hidden' ,}}>
            <Image
              style={{ height: 112, width: 112 ,resizeMode:'cover'}}
              source={imgs} // Use the imgs prop, passed as require()
            />
          </View>

          <Text style={{ fontSize: 14, color: '#22d3ee', fontWeight: '900',}}>
            {title}
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
            <Text style={{ fontSize: 12, color: 'white', fontWeight: '400' }}>
              {gendra}
            </Text>

            <View style={{ justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 12, color: 'white', fontWeight: '700',}}>
                {rating}
                <MaterialCommunityIcons name="star" size={13} color="gold" />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

  );
};

export default GalleryCard;
