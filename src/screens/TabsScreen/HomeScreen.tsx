import { View, Text, Dimensions, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import React, { useState } from 'react';
import Video from 'react-native-video';
import { FlatList } from 'react-native-gesture-handler';
import OrderDetails from '../TabsScreen/OrderScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const HomeScreen = ({ navigation }: any) => {
  const [selectedindex, setselectedindex] = useState(0);

  const data = [
  {
    src: require('../../assets/videos/video1.mp4'),
    name: 'Burger',
    price: 150,
    logoName: 'Burger King',
    description: 'Enjoy the juiciest burgers made fresh every day here in Lucknow. Each bite is packed with flavor and topped with your favorite ingredients.',
  },
  {
    src: require('../../assets/videos/video2.mp4'),
    name: 'Pizza Planet',
    price: 350,
    logoName: 'Pizza Planet Co.',
    description: 'Delicious pizzas baked with love, loaded with fresh toppings and melted cheese, perfect for sharing with friends and family.',
  },
  {
    src: require('../../assets/videos/video3.mp4'),
    name: 'Tandoori Tales',
    price: 250,
    logoName: 'Tandoori Tales',
    description: 'Authentic tandoori flavors to satisfy your taste buds instantly. Our marinated meats and vegetables are grilled to perfection.',
  },
  {
    src: require('../../assets/videos/video4.mp4'),
    name: 'Burger Hub',
    price: 200,
    logoName: 'Burger Hub Inc.',
    description: 'The ultimate burger experience with fresh ingredients, special sauces, and spices to give every bite a delicious twist.',
  },
  {
    src: require('../../assets/videos/video5.mp4'),
    name: 'Sushi Spot',
    price: 400,
    logoName: 'Sushi Spot',
    description: 'Fresh sushi rolls crafted with premium fish, perfectly cooked rice, and vibrant ingredients to delight every sushi lover.',
  },
];



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <FlatList
        data={data}
        onMomentumScrollEnd={e => {
          const index = Math.round(e.nativeEvent.contentOffset.y / SCREEN_HEIGHT);
          setselectedindex(index);
        }}
        pagingEnabled
        decelerationRate={'fast'}
        snapToInterval={SCREEN_HEIGHT}
        snapToAlignment="start"
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT, position: 'relative' }}>

              <Video
                style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT, position: 'absolute', top: 0, left: 0, zIndex: 0 }}
                source={item.src}
                resizeMode="cover"
                repeat
                paused={selectedindex !== index}
                muted={false}
                controls={false}
                ignoreSilentSwitch="obey"
              />
              <View style={{flex:1,
                marginBottom:SCREEN_WIDTH*0.20
              }}>
              <Text style={{
                position: 'absolute',
                top: SCREEN_HEIGHT * 0.05,
                left: SCREEN_WIDTH * 0.05,
                color: 'white',
                fontSize: SCREEN_WIDTH * 0.08,
                fontWeight: '900',
                textShadowColor: 'rgba(0,0,0,0.75)',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 5,
                zIndex: 2
              }}>
                {item.name}
              </Text>

           
              <View style={{
                position: 'absolute',
                bottom: SCREEN_HEIGHT * 0.20, 
                left: SCREEN_WIDTH * 0.05,
                flexDirection: 'row',
                alignItems: 'center',
                zIndex: 2
              }}>
                <Image
                  style={{
                    width: SCREEN_WIDTH * 0.12,
                    height: SCREEN_WIDTH * 0.12,
                    borderRadius: (SCREEN_WIDTH * 0.12) / 2,
                    borderWidth: 2,
                    borderColor: 'white'
                  }}
                  source={require('../../assets/images/logores.jpg')}
                />
                <Text style={{
                  marginLeft: SCREEN_WIDTH * 0.03,
                  fontSize: SCREEN_WIDTH * 0.045,
                  fontWeight: '600',
                  color: '#ffffff',
                  fontFamily: 'Karla-Regular',
                }}>
                  {item.logoName}
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: SCREEN_HEIGHT * 0.13,
                  left: SCREEN_WIDTH * 0.04,
                  backgroundColor: '#E63D3D',
                  paddingVertical: SCREEN_HEIGHT * 0.010,
                  paddingHorizontal: SCREEN_WIDTH * 0.08,
                  borderRadius: 15,
                  elevation: 5,
                  borderWidth: 1,
                  borderColor: 'white',
                  zIndex: 2
                }}
                onPress={() => navigation.navigate('OrderDetails',{item})}
              >
                <Text style={{
                  color: 'white',
                  fontSize: SCREEN_WIDTH * 0.06,
                  fontFamily: 'Karla-Regular',
                  fontWeight: '700'
                }}>
                  Order Now                          {'>>'}
                </Text>
              </TouchableOpacity>

              <Text style={{
                position: 'absolute',
                bottom: SCREEN_HEIGHT * 0.07,
                left: SCREEN_WIDTH * 0.05,
                right: SCREEN_WIDTH * 0.05,
                fontSize: SCREEN_WIDTH * 0.035,
                fontWeight: '500',
                color: '#FFFFFFCC',
                fontFamily: 'Karla-Regular',
              }}>
                {item.description}
              </Text>
              
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
