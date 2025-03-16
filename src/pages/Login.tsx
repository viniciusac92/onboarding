import React from 'react';
import Header from '../layout/Header';
import '../index.css';

const Login: React.FC = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/obvia-login-background-image.png)' }}>
      <Header />
      <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4">Entrar</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">E-mail</label>
              <input type="email" placeholder="E-mail" className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <input type="password" placeholder="Senha" className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm text-gray-600">Lembrar</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Esqueci minha senha</a>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
