import React, { useCallback, useState, useEffect } from 'react';
import { Text, View, ScrollView, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

import githubLogo from '../../assets/github-logo.png';

import { 
  Container,
  Header,
  Title,
  UserAvatar,
  UserName,
  Body,
  Input,
  ButtonSection,
  Button,
  ButtonText,
  Repositories,
  LoadingIcon,
  URLText
} from './styles';

const Main = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [inputText, setInputText] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleEraseRepositories = () => {
    setRepositories([]);
  }

  const handleGetRepositories = () => {
    if (inputText.length == 0) {
      alert('Digite o nome de usuário');
      return;
    }

    setLoading(true);
    setRepositories([]);
    
    setTimeout(()=>{
      getRepositories();
    }, 3000);
  }

  function getRepositories() {
    setLoading(false);
    
    api.get(`/users/${inputText}/repos`).then((response) => {
      setRepositories(response.data);
      setSearchHistory([...searchHistory, inputText]);

    }).catch(() => {
      alert('Usuário não encontrado!');
    }) ;
  }

  const saveSearchHistory = async () => {
    try {
      await AsyncStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    } catch (err) {
      console.error(err);
    }
  }

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

  useEffect(() => {
    loadSearchHistory();
  }, []);

  useEffect(() => {
    saveSearchHistory();
  }, [searchHistory]);

  const OpenRepositoryPage = ({url, children}) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
  
      if (!supported) { 
        alert(`Don't know how to open this URL: ${url}`);
      }

      await Linking.openURL(url);

    }, [url]);
  
    return <URLText onPress={handlePress}><Text>{children}</Text></URLText>;
  };

  return (
    <Container>
      <Header>
        <Title>Github Repository Explorer</Title>
        {
          repositories.length > 0
          ? <UserAvatar source={{ uri: repositories[0].owner.avatar_url }} />
          : <UserAvatar source={githubLogo} />
        }

        <UserName>{repositories[0]?.full_name.split('/')[0]}</UserName>

        {
          repositories.length == 0 
          ? <Text style={{ marginTop: -17, textAlign: 'center'}}>
              To open the repository page, {'\n'}Click on the repo's name.
            </Text>
          : (
            repositories.length <= 1
            ? <Text>{repositories.length} repository</Text>
            : <Text>{repositories.length} repositories</Text>
          )
        }
      </Header>

      <Body>
        <Input
          placeholder={'github-user-name'}
          onChangeText={(value) => setInputText(value)}
        /> 

        <ButtonSection>
          <Button
            onPress={handleGetRepositories}
          >
            <ButtonText>Search</ButtonText>
          </Button>
          
          <Button
            onPress={handleEraseRepositories}
          >
            <ButtonText>Clean</ButtonText>
          </Button>
        </ButtonSection>

        <Repositories>
          <ScrollView>
            {loading == true && <LoadingIcon size='large' color='#000' />}

            {repositories?.map((repository) => (
              <View key={repository.id} style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold' }}>Repo: </Text>

                <OpenRepositoryPage url={repository.html_url}>
                  <Text>{repository.name}</Text>
                </OpenRepositoryPage>
              </View>
            ))}
          </ScrollView>
        </Repositories>
      </Body>
    </Container>
  );
}

export default Main;
