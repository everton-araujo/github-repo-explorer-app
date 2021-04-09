import React from 'react';

import SearchIcon from '../../assets/search.png';
import Favorite from '../../assets/like.png';
import History from '../../assets/history.png';

import { TabArea, TabItem, TabItemCenter, Icon, CenterIcon } from './styles';


const CustomTabBar = ({ state, navigation }) => {
  const goTo = (pageName) => {
    navigation.navigate(pageName);
  }

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Favorites')}>
        <Icon 
          source={Favorite}
          style={{ opacity: state.index === 1 ? 1 : 0.5 }}
        />
      </TabItem>

      <TabItemCenter 
        style={{ 
          backgroundColor: state.index === 0 ? '#CDF2F9' : '#FFF',
          borderColor: state.index === 0 ? '#D3D3D3' : '#4EADBE',
          // marginTop: state.index === 1 ? -20 : -10
        }}
        onPress={() => goTo('Repositories')}
      >
        <CenterIcon 
          source={SearchIcon}
        />
      </TabItemCenter>

      <TabItem onPress={() => goTo('History')}>
        <Icon
          source={History} 
          style={{ opacity: state.index === 2 ? 1 : 0.5 }} 
        />
      </TabItem>
    </TabArea>
  );
}

export default CustomTabBar;
