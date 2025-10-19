import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../TabsScreen/HomeScreen';
import IconFA from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import ProfileScreen from '../TabsScreen/ProfileScreen';
import OrderScreen from '../TabsScreen/OrderScreen';

const { width, height } = Dimensions.get('window');
const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator
    initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#EE2222',
        tabBarInactiveTintColor: '#888',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          top: height * 0.85,  
          margin: height * 0.015, 
          height: height * 0.074, 
          padding:11,
          marginLeft: width * 0.14,
          width: width * 0.7,
          backgroundColor: '#302D2D',
          borderRadius: width * 0.1,
          paddingBottom: height * 0.005,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: height * 0.006 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontFamily: 'Karla-Regular', color }}>OrderScreen</Text>
          ),
          tabBarIcon: ({ focused, size }) => (
            <View
              style={[
                styles.iconWrapper,
                focused && styles.iconWrapperActive,
              ]}
            >
              <IconFA name="cutlery" color="#fff" size={35} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontFamily: 'Karla-Regular', color }}>Home</Text>
          ),
          tabBarIcon: ({ focused, size }) => (
            <View
              style={[
                styles.iconWrapper,
                focused && styles.iconWrapperActive,
              ]}
            >
              <IconFA name="home" color="#fff" size={35} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontFamily: 'Karla-Regular', color }}>Profile</Text>
          ),
          tabBarIcon: ({ focused, size }) => (
            <View
              style={[
                styles.iconWrapper,
                focused && styles.iconWrapperActive,
              ]}
            >
              <IconFA name="user" color="#fff" size={35} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 75,
    borderRadius: 30,
    marginTop: 30,
  },
  iconWrapperActive: {
    backgroundColor: '#EE2222',
  },
});

export default TabsNavigator;
