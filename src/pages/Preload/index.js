import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/github-logo.png';

import { Container, Title, LoadingIcon } from './styles';

const Preload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate('Repositories');
    }, 3000);

  }, []);

  return (
    <Container>
      <Image source={logo} />
      <Title>Github Repository Explorer App</Title>

      <LoadingIcon size='large' color='#FFF' />
    </Container>
  );
}

export default Preload;
