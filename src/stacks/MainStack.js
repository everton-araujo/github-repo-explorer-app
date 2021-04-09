import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../pages/Preload';
import Repositories from '../pages/SearchRepositories';
import MainTab from './MainTab';

const Stack = createStackNavigator();

const MainStack = () => {
  return(
    <Stack.Navigator
      initialRouteName='Preload'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Preload' component={Preload} />
      <Stack.Screen name='Repositories' component={Repositories} />
      <Stack.Screen name='MainTab' component={MainTab} />
    </Stack.Navigator>
  );
}

export default MainStack;