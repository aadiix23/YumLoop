import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// @ts-ignore: react-native-masonry-list has no type declarations
import MasonryList from 'react-native-masonry-list';


  const images = Array.from({ length: 40 }, (_, i) => {
  const randomHeight = 300 + Math.floor(Math.random() * 400) 
  const randomWidth = 250 + Math.floor(Math.random() * 200) 

  return {
    id: (i + 1).toString(),

    //In Future updated With real food photos
    source: { uri: `https://picsum.photos/${randomWidth}/${randomHeight}?random=${i + 1}` },
  }
})

const SearchScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{paddingTop:5}}>
        <FontAwesome name="search" size={22} color="rgba(5, 5, 5, 1)"  style={styles.searchicon}/>
        <TextInput placeholder="Search..." 
        placeholderTextColor="rgba(58, 58, 58, 1)"
        style={styles.searchBox}
        />
      </View>
      <MasonryList
      images={images}
      columns={3}
      spacing={2}
      imageContainerStyle={{borderRadius:10}}
      />
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  searchBox:{
    height: 50,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 50,
    borderRadius: 15,
  },
  searchicon:{
    position:'absolute',
    top:hp("3.2%"),
    left:wp("7%"),
  },
  imagesgrid:{
    width: wp("32%"),
    height: hp("20%"),
    margin: wp("1%"),
    borderRadius:10,
  }
})