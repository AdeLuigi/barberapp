import React, { useRef, useCallback } from 'react';
import { Alert, Image, TextInput } from 'react-native';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import api from '../../service/api';
import getValidationErrors from '../../utils/getValidationErrors';
import logo from '../../assets/logo.png';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './style';

interface SignUpFormData {
  name:string;
  email:string;
  password:string;
}

const SignUp: React.FC = () => {
  const emailInputRef = useRef<TextInput>(null);

  const passwordInputRef = useRef<TextInput>(null);

  const navigate = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.post('/users', data);
        navigate.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          console.log(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [],
  );

  return (
    <>
      <Container>
        <Image source={logo} />
        <Title>Crie sua conta</Title>
        <Form
          ref={formRef}
          onSubmit={handleSignUp}
          style={{ width: '100%' }}
        >
          <Input
            autoCapitalize="words"
            name="name"
            icon="user"
            placeholder="Digite seu Nome"
            returnKeyType="next"
            onSubmitEditing={() => {
              emailInputRef.current?.focus();
            }}
          />
          <Input
            ref={emailInputRef}
            keyboardType="email-address"
            name="email"
            icon="mail"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu E-mail"
            returnKeyType="next"
            onEndEditing={() => {
              passwordInputRef.current?.focus();
            }}

          />
          <Input
            ref={passwordInputRef}
            secureTextEntry
            name="password"
            icon="lock"
            placeholder="Digite sua Senha"
            returnKeyType="send"
            onSubmitEditing={() => formRef.current?.submitForm()}
          />
          <Button onPress={() => formRef.current?.submitForm()}>Cadastrar-se</Button>
        </Form>
      </Container>
      <CreateAccountButton onPress={() => navigate.navigate('SignIn')}>
        <Icon name="arrow-left" size={20} color="#ff9000" />
        <CreateAccountButtonText>Voltar para Login</CreateAccountButtonText>
      </CreateAccountButton>
    </>

  );
};

export default SignUp;
