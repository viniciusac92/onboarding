import React from 'react';
import obviaLogo from '../assets/obvia-logo.png';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <img src={obviaLogo} alt="Obvia Logo" className="h-8" />
      <a href="#" className="text-xs text-black-500 underline font-bold">Entre em contato</a>
    </header>
  );
};

export default Header;
