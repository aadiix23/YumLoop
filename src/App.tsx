import React, { useEffect, } from 'react';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabsscreen from './screens/Common/TabsNavigator';
import OnboardingScreen from '../src/screens/Common/OnboardingScreens/OnboardingScreen'
import authnavigator from './screens/auth/authNavigator'
import OrderDetails from './screens/TabsScreen/OrderScreen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabsscreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
        <Stack.Screen name="authnavigator" component={authnavigator}/>
        <Stack.Screen name ="OrderDetails" component={OrderDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
