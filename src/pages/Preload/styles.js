import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #63C2D1;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 100px;
  margin-bottom: -20px;
`;
