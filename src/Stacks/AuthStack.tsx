import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import LoginScreen from '../Screens/Authentication/LoginScreen';
import RegisterScreen from '../Screens/Authentication/RegisterScreen';

const Auth = createStackNavigator();

const options: StackNavigationOptions = {
  headerShown: false,
};

const AuthStack = () => {
  return (
    <Auth.Navigator screenOptions={options}>
      <Auth.Screen name="LoginScreen" component={LoginScreen} />
      <Auth.Screen name="RegisterScreen" component={RegisterScreen} />
    </Auth.Navigator>
  );
};

export default AuthStack;
