import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions,} from 'react-native';
const { width, height } = Dimensions.get('window');


const Tab = createMaterialTopTabNavigator();

const authNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <Tab.Navigator 
     screenOptions={{
          tabBarLabelStyle: { fontSize: 36, fontWeight: '800',color:'#1D2D4C', fontFamily:'Karla-Regular', },
          tabBarStyle: { backgroundColor: '#fff' },
          tabBarIndicatorStyle: { backgroundColor: '#FF6347' },
          tabBarContentContainerStyle: { marginTop: 20 },
        }}
        >
       
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Sign up" component={SignupScreen} />
    </Tab.Navigator>
    </SafeAreaView>
  )
}

export default authNavigator

const styles = StyleSheet.create({})