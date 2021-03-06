import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';
import Repositories from '../pages/SearchRepositories';
import History from '../pages/History';
import Favorites from '../pages/Favorites';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name='Repositories' component={Repositories} />
      <Tab.Screen name='Favorites' component={Favorites} />
      <Tab.Screen name='History' component={History} />
    </Tab.Navigator>
  );
}

export default MainTab;
