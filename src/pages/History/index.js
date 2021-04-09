import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import refreshIcon from '../../assets/refresh.png';

import { 
  Container,
  Title,
  ResultArea,
  Users,
  User,
  ButtonArea,
  ClearButton,
  ClearButtonText,
  RefreshButton,
  RefreshIcon
} from './styles';

const History = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const searchHistoryUniq = [...new Set(searchHistory)];

  const loadSearchHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('searchHistory');

      if (history && JSON.parse(history).length) {
        setSearchHistory(JSON.parse(history));
      }
    } catch (err) {
      console.error(err);
    }
  }

  const saveEmptyHistory = () => {
    try {
      setSearchHistory([]);
      AsyncStorage.setItem('searchHistory', JSON.stringify([]));
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    loadSearchHistory();
  }, []);

  const refresh = () => {
    loadSearchHistory();
  }

  return (
    <Container>
      <Title>Search History</Title>

      <ResultArea>
        <ScrollView>
          {searchHistoryUniq.map((user) =>
            <Users key={Math.random()}>
              <User>
                {user}
              </User>
            </Users>
          )}
        </ScrollView>
      </ResultArea>

      <ButtonArea>
        <ClearButton>
          <ClearButtonText
            onPress={saveEmptyHistory}
          >
            Clear History
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

export default History;
