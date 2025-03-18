import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { validateEmailAndLogin } from '@/utils/auth';
import LoginContainer from '@/components/containers/LoginContainer';
import myBackground from '../assets/obvia-login-background-image.png';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const form = useForm<{ username: string; password: string; rememberMe: boolean }>({
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  })

  const onSubmit: SubmitHandler<{ username: string; password: string; rememberMe: boolean }> = (data) => {
    const { username, password } = data;

    if (validateEmailAndLogin(username, password)) {
      navigate('/register');
      console.log('Login successful');
    } else {
      console.log('Invalid email or password');
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${myBackground})` }}
    >
      <LoginContainer form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
