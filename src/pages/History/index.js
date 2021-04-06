import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
  Container,
  Title,
  ResultArea,
  Users,
  User,
  ClearButton,
  ClearButtonText
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

  const saveSearchHistory = async () => {
    try {
      setSearchHistory([]);
      console.log('SALVOU', searchHistory);
      await AsyncStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    } catch (err) {
      console.error(err);
    }
  }

  const clearHistory = () => {
    setSearchHistory([]);
    saveSearchHistory();
  }

  useEffect(() => {
    loadSearchHistory();
  }, []);

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

      <ClearButton>
        <ClearButtonText
          onPress={clearHistory}
        >
          Clear History
        </ClearButtonText>
      </ClearButton>
    </Container>
  );
}

export default History;
