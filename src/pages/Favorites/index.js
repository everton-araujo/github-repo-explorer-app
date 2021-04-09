import React, { useState, useEffect, useCallback } from 'react';
import { TouchableOpacity, Text, Linking, ScrollView, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import refreshIcon from '../../assets/refresh.png';

import { 
  Container,
  Title,
  ResultArea,
  Repos, 
  UserAvatar,
  User,
  ButtonArea,
  ClearButton,
  ClearButtonText,
  RefreshButton,
  RefreshIcon
} from './styles';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const favoritesUniq = [...new Set(favorites)];
  
  const OpenRepositoryPage = ({url, children}) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
  
      if (!supported) { 
        alert(`Don't know how to open this URL: ${url}`);
      }

      await Linking.openURL(url);
    }, [url]);
  
    return (
      <TouchableOpacity onPress={handlePress}>
        <Text>{children}</Text>
      </TouchableOpacity>
    );
  }

  const loadFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');

      if (favorites && JSON.parse(favorites).length) {
        setFavorites(JSON.parse(favorites));
      }
    } catch (err) {
      console.error(err);
    }
  }

  const saveEmptyFavorites = () => {
    try {
      setFavorites([]);
      AsyncStorage.setItem('favorites', JSON.stringify(['']));
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    loadFavorites();
  }, []);

  const refresh = () => {
    loadFavorites();
  }

  return (
    <Container>
      <Title>Favorites</Title>

      <ResultArea>
        <ScrollView>
          {
            favoritesUniq.map((userRepo) => 
              <Repos key={userRepo}>
                <OpenRepositoryPage url={`https://github.com/${userRepo.split('|')[0]}`}>
                  <View style={{ flexDirection: 'row' }} >
                    <UserAvatar style={{ marginRight: 10 }} source={{ uri: userRepo.split('|')[1] }} />
                    <User>
                      {userRepo.split('|')[0]}
                    </User>
                  </View>
                </OpenRepositoryPage>
              </Repos>
            )
          }
        </ScrollView>
      </ResultArea>

      <ButtonArea>
        <ClearButton 
          onPress={saveEmptyFavorites}
        >
          <ClearButtonText>
            Clear Favorites
          </ClearButtonText>
        </ClearButton>

        <RefreshButton onPress={refresh}>
          <RefreshIcon 
            source={refreshIcon}
          />
        </RefreshButton>
      </ButtonArea>
    </Container>
  );
}

export default Favorites;
