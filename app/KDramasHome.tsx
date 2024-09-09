import React from 'react'
import GalleryCard from '@/components/GalleryCard'
import { View, Text, ScrollView } from 'react-native'
import Heading from '@/components/Heading'
import { Link } from 'expo-router'
import DetailScreen from './DetailScreen'

const KDramasHome = () => {
  return (
<View style={{ justifyContent: 'center', backgroundColor: 'black', }}>

<View style={{marginBottom:20, backgroundColor:'Black',elevation:100,shadowColor:'cyan',opacity:0.9}}>

<View style={{flexDirection:'row',flexWrap:'wrap',backgroundColor:'black',alignItems:'center',justifyContent:'center',gap:5,padding:8,elevation:100,shadowColor:'cyan',opacity:0.9}}>


<GalleryCard
        imgs={require('./assets/images/sweet.jpg')} // Reference to the local image
        title="The sweetcher"
        gendra="Season"
        rating={7.8}
        />


<GalleryCard
        imgs={require('./assets/images/sweet.jpg')} // Reference to the local image
        title="The sweetcher"
        gendra="Season"
        rating={7.8}
        />

<GalleryCard
        imgs={require('./assets/images/sweet.jpg')} // Reference to the local image
        title="The sweetcher"
        gendra="Season"
        rating={7.8}
        />

<GalleryCard
        imgs={require('./assets/images/sweet.jpg')} // Reference to the local image
        title="The sweetcher"
        gendra="Season"
        rating={7.8}
        />

<GalleryCard
        imgs={require('./assets/images/sweet.jpg')} // Reference to the local image
        title="The sweetcher"
        gendra="Season"
        rating={7.8}
        />

<GalleryCard
        imgs={require('./assets/images/sweet.jpg')} // Reference to the local image
        title="The sweetcher"
        gendra="Season"
        rating={7.8}
        />


<GalleryCard
        imgs={require('./assets/images/sweet.jpg')} // Reference to the local image
        title="The sweetcher"
        gendra="Season"
        rating={7.8}
        />

<GalleryCard
        imgs={require('./assets/images/sweet.jpg')} // Reference to the local image
        title="The sweetcher"
        gendra="Season"
        rating={7.8}
        />

<GalleryCard
        imgs={require('./assets/images/sweet.jpg')} // Reference to the local image
        title="The sweetcher"
        gendra="Season"
        rating={7.8}
        />

<GalleryCard
        imgs={require('./assets/images/sweet.jpg')} // Reference to the local image
        title="The sweetcher"
        gendra="Season"
        rating={7.8}
        />

<GalleryCard
        imgs={require('./assets/images/sweet.jpg')} // Reference to the local image
        title="The sweetcher"
        gendra="Season"
        rating={7.8}
        />

<GalleryCard
        imgs={require('./assets/images/sweet.jpg')} // Reference to the local image
        title="The sweetcher"
        gendra="Season"
        rating={7.8}
        />

        </View>

        </View>


        </View>

  )
}

export default KDramasHome