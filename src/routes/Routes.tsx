import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from '../layout/Layout';
import Register from '../pages/Register';
import Enterprise from '../pages/Enterprise';
import Partners from '@/pages/Partners';
import NewPartner from '@/pages/NewPartner';
import Home from '@/pages/Home';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/enterprise" element={<Enterprise />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/new-partner" element={<NewPartner />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
