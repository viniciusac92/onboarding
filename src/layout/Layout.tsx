import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen relative">
            <Header />
            <main className="h-full">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
