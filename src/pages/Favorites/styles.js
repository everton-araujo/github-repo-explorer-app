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
  height: ${windowHeight * 0.71}px;
  width: 350px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #D3D3D3;
  background-color: #FFF;
`;

export const Repos = styled.View`
  margin-top: 15px;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 50px;
`;

export const User = styled.Text`
  font-size: 16px;
`;

export const ButtonArea = styled.View`
  flex-direction: row;
  margin-top: 14px;
`;

export const ClearButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  margin-left: 100px;
`;

export const RefreshButton = styled.TouchableOpacity`
  flex: 0.5;
  align-items: center;
  margin-right: 10px;
  margin-top: 6px;
`;

export const ClearButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #FFF;
`;

export const RefreshIcon = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: #FFF;
`;
