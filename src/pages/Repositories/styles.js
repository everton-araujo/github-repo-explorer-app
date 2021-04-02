import styled from 'styled-components';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Header = styled.View`
  padding: 10px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const UserAvatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const UserName = styled.Text`
  font-size: 16px;
`;

export const Body = styled.View`
  align-items: center;
  margin-top: 15px;
`;

export const Input = styled.TextInput`
  border: 1px;
  width: ${windowWidth * 0.8}px;
  height: 40px;
  text-align: center;
  border-color: #D3D3D3;
`;

export const ButtonSection = styled.View`
  flex-direction: row;
  margin-top: 6px;
`;

export const Button = styled.TouchableOpacity`
  margin: 10px;
  border: 1px;
  height: 30px;
  width: 70px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  border-color: #AAA;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
`;

export const Repositories = styled.View`
  padding: 20px;
  margin: 10px;
  border-width: 1px;
  height: 370px;
  width: 350px;
  border-radius: 6px;
`;

export const URLText = styled.TouchableOpacity`
  
`;
