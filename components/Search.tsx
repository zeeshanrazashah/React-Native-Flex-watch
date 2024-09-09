import React from 'react'
import { View, Text, TextInput } from 'react-native'

const Search = () => {
  return (

    <View style={{ backgroundColor: 'black' }}>
      <TextInput style={{
       color: 'white', opacity: 0.6, borderRadius: 10, borderWidth: 1, borderColor: 'white', alignItems: 'center', padding: 5, textAlign: 'center',
        fontWeight: '900', fontSize: 15,
      }}
        placeholder='Search' placeholderTextColor={'white'} />
    </View>
  )
}

export default Search