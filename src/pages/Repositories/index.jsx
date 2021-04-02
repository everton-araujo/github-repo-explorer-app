import React, { useCallback, useState } from 'react';
import { Text, View, ScrollView, Linking } from 'react-native';

import api from '../../services/api';

import githubLogo from '../../assets/github-logo.png';

import { 
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
  URLText
} from './styles';

const Main = () => {
  const [inputText, setInputText] = useState('');
  const [repositories, setRepositories] = useState([]);

  const handleEraseRepositories = () => {
    setRepositories([]);
  }

  const handleGetRepositories = async () => {
    if (inputText.length == 0) {
      alert('Digite o nome de usuário');
      return;
    }

    await api.get(`/users/${inputText}/repos`).then((response) => {
      setRepositories(response.data);

      console.log(response.data);
    }).catch(() => {
      alert('Usuário não encontrado!');
    }) ;
  }
  
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
    <>
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
            <ButtonText>Pesquisar</ButtonText>
          </Button>
          
          <Button
            onPress={handleEraseRepositories}
          >
            <ButtonText>Limpar</ButtonText>
          </Button>
        </ButtonSection>

        <Repositories>
          <ScrollView>
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
    </>
  );
}

export default Main;
