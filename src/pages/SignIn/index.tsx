import React, { useCallback, useRef } from 'react';
import {
  Alert, Image, KeyboardAvoidingView, TextInput,
} from 'react-native';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import api from '../../service/api';
import logo from '../../assets/logo.png';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './style';

interface SignInFormData{
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  async function signIn(data:SignInFormData) {
    const { email, password } = data;
    try {
      const response = await api.get('/');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSignIn = async (data: SignInFormData) => {
    await signIn({
      email: data.email,
      password: data.password,
    });
  };

  const navigate = useNavigation();

  return (
    <>
      <Container>
        <Image source={logo} />
        <Title> Faça seu login</Title>
        <Form ref={formRef} style={{ width: '100%' }} onSubmit={handleSignIn}>
          <Input
            name="email"
            autoCorrect={false}
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail"
            placeholder="Digite seu E-mail"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current?.focus();
            }}
          />
          <Input
            ref={passwordInputRef}
            name="password"
            icon="lock"
            secureTextEntry
            placeholder="Digite sua Senha"
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm();
            }}
          />
          <Button onPress={() => {
            formRef.current?.submitForm();
          }}
          >
            Entrar

          </Button>
        </Form>

        <ForgotPassword>
          <ForgotPasswordText>Esqueci a senha</ForgotPasswordText>
        </ForgotPassword>

      </Container>

      <CreateAccountButton onPress={() => navigate.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Cadastre-se!</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
