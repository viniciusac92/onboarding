import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from '../layout/Layout';
import Register from '../pages/Register';
import Enterprise from '../pages/Enterprise';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/enterprise" element={<Enterprise />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
