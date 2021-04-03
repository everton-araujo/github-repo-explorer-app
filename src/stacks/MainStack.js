import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../pages/Preload';
import Repositories from '../pages/Repositories';

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
    </Stack.Navigator>
  );
}

export default MainStack;