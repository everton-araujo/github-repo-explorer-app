import React from 'react';
import { Image } from 'react-native';

import SearchIcon from '../../assets/search.png';
import Favorite from '../../assets/like.png';

import { TabArea, TabItem, Icon } from './styles';


const CustomTabBar = ({ state, navigation }) => {
  const goTo = (pageName) => {
    navigation.navigate(pageName);
  }

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Repositories')}>
        <Icon 
          source={SearchIcon}
          style={{ opacity: state.index === 0 ? 1 : 0.5 }}
        />
      </TabItem>

      <TabItem onPress={() => goTo('History')}>
        <Icon 
          source={Favorite} 
          style={{ opacity: state.index === 1 ? 1 : 0.5 }} 
        />
      </TabItem>
    </TabArea>
  );
}

export default CustomTabBar;
