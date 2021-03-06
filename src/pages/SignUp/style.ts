import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-family:'RobotoSlab-Medium';
  font-size:20px;
  color: #F4EDE8;
  margin:64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  align-items:center;
  justify-content:center;
  margin-top:24px;
`;
export const ForgotPasswordText = styled.Text`
  font-family:'RobotoSlab-Medium';
  font-size:14px;
  color:#F4EDE8;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  width:100%;
  height:60px;
  align-items:center;
  background:#312e38;
  justify-content:center;
  flex-direction:row;
  margin-top:40px;
  border: 1px solid #232129;

`;

export const CreateAccountButtonText = styled.Text`
  font-family:'RobotoSlab-Medium';
  font-size:14px;
  color:#ff9000;
  margin-left:16px;
`;
