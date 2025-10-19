import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';




const CustomButton = ({ label, onPress, isSkip }: { label: string, onPress?: () => void, isSkip?: boolean }) => (
  <TouchableOpacity onPress={onPress} style={{ padding: 45 }}>
    <Text style={{ fontSize: 20, color: isSkip ? '#1D2D4C80' : '#EE2222', fontWeight: '500',fontFamily: 'Poppins-Regular',elevation:5, }}>
      {label}
    </Text>
  </TouchableOpacity>
);


const OnboardingScreen = () => {
  const navigation = useNavigation<any>(); 

  AsyncStorage.getItem('completed').then((value)=>{
    if(value==='true'){
      navigation.replace('authnavigator')
    }
  })  

  const onboardingCompleted = async ()=>{
    try {
      await AsyncStorage.setItem('completed','true')
      navigation.replace('authnavigator');
    } catch (error) {
      //saving error
    }
  }
 
  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        bottomBarHeight={140}
        bottomBarHighlight={false}

        
  SkipButtonComponent={(props: any) => <CustomButton label="Skip" isSkip {...props} onPress={onboardingCompleted} />}
  NextButtonComponent={(props: any) => <CustomButton label="Next" {...props} />}
  DoneButtonComponent={(props: any) => <CustomButton label="Done" {...props} onPress={onboardingCompleted} />}

       
        subTitleStyles={styles.subTitleBelow}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../../assets/images/onboarding1.png')}
              style={styles.image} />,
            title: (
              <View style={styles.TopHeadings}>
                <Text style={styles.topsubheading}>Create Your Account</Text>
                <Text style={styles.topheading}>Fresh Food</Text>
              </View>
            ),
            subtitle: '"Fresh Flavors Await! Create Your Account & Taste the Difference."',
          },
           {
            backgroundColor: '#fff',
            image: <Image source={require('../../../assets/images/onboarding2.png')}
              style={styles.image} />,
            title: (
              <View style={styles.TopHeadings}>
                <Text style={styles.topsubheading}>Log In To Your Account</Text>
                <Text style={styles.topheading}>Fast Delivery</Text>
              </View>
            ),
            subtitle: '"Hungry? Get Your Cravings Delivered Fast! Already a Foodie? Log In!"',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../../assets/images/onboarding3.png')}
              style={styles.image} />,
            title: (
              <View style={styles.TopHeadings}>
                <Text style={styles.topsubheading}>Enjoy Our Service</Text>
                <Text style={styles.topheading}>Easy Payment</Text>
              </View>
            ),
            subtitle: '"Seamless Payments, Delicious Moments! Order Now & Enjoy Your Meal!"',
          },
        ]}
      />
    </View>
  );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    elevation:20,
    resizeMode: 'contain',
  },
  TopHeadings: {
    top: height * 0.08,
    left: width * 0.05,
    alignItems: 'flex-start',
    position: 'absolute'
  },
  topsubheading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: "#1D2D4C",
    fontWeight: '900',
  },
  topheading: {
    fontFamily: 'Poppins-Regular',
    fontSize: 40,
    color: "#1D2D4C",
    fontWeight: '900',
    paddingBottom: height * 0.10,
  },
  subTitleBelow: {
    fontSize: 22,
    bottom: height * 0.03,
    color: "#1D2D4C80",
    margin: 19
  }
});  