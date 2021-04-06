import styled from 'styled-components';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #63C2D1;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  padding: 25px;
`;

export const ResultArea = styled.View`
  background-color: #FFF;
  height: ${windowHeight * 0.73}px;
  width: 350px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #D3D3D3;
  background-color: #FFF;
`;

export const Users = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const User = styled.Text`
  font-size: 16px;
  
`;

export const ClearButton = styled.TouchableOpacity`
  margin-top: 12px;
`;

export const ClearButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #FFF;
`;
