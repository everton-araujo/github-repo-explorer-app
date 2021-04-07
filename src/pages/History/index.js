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

  const saveEmptyHistory = () => {
    try {
      setSearchHistory([]);
      AsyncStorage.setItem('searchHistory', JSON.stringify(['']));
    } catch (err) {
      console.error(err);
    }
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
          onPress={saveEmptyHistory}
        >
          Clear History
        </ClearButtonText>
      </ClearButton>
    </Container>
  );
}

export default History;
