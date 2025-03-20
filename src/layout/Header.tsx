import React from 'react';
import { useLocation } from 'react-router-dom';
import obviaLogo from '../assets/obvia-logo.png';
import obviaLoginLogo from '../assets/obvia-login-logo.png';

const Header: React.FC = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/';

    return (
        <header
            className={`flex justify-between items-center h-20 px-4 py-3 md:px-20 md:py-5 ${isLoginPage ? 'bg-black/30' : 'bg-white/30'} absolute top-0 left-0 right-0 z-10`}
        >
            <img
                src={isLoginPage ? obviaLoginLogo : obviaLogo}
                alt="Obvia Logo"
                className="h-10 md:h-14"
            />
            <div className="">
                <a
                    href="#"
                    className={`underline font-bold ${isLoginPage ? 'text-white' : 'text-black-500'}`}
                >
                    Entre em contato
                </a>
            </div>
        </header>
    );
};

export default Header;
