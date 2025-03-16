import React from 'react';
import { useLocation } from 'react-router-dom';
import obviaLogo from '../../public/obvia-logo.png';
import obviaLoginLogo from '../../public/obvia-login-logo.png';


const Header: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <header className={`flex justify-between items-center p-4 ${isLoginPage ? 'bg-black/30' : 'bg-white'}`}>
      <img src={isLoginPage ? obviaLoginLogo : obviaLogo} alt="Obvia Logo" className="h-10" />
      <a href="#" className={`text-xs underline font-bold ${isLoginPage ? 'text-white' : 'text-black-500'}`}>Entre em contato</a>
    </header>
  );
};

export default Header;