import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import HomeScreen from '../Screens/App/HomeScreen';
import {AppStackParams} from '../Constants/AppStackParams';
import DetailScreen from '../Screens/App/DetailScreen';
import AddUserScreen from '../Screens/App/AddUserScreen';

const App = createStackNavigator<AppStackParams>();
const options: StackNavigationOptions = {
  headerShown: false,
};

const AppStack = () => {
  return (
    <App.Navigator screenOptions={options}>
      <App.Screen name="HomeScreen" component={HomeScreen} />
      <App.Screen
        name="AddUserScreen"
        component={AddUserScreen}
        options={{
          presentation: 'modal',
        }}
      />
      <App.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </App.Navigator>
  );
};

export default AppStack;
