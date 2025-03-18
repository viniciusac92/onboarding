import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Enterprise from '../pages/Enterprise';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/enterprise" element={<Enterprise />} />
    </Routes>
  );
};

export default AppRoutes;