import React from 'react';
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Login from '../src/pages/Login';
import CadastroUsuario from './components/CadastroUsuario'; // Renomeei para evitar confusão
import Inicio from './pages/Inicio';
import Home from './pages/home';


const AppRoutes: React.FC = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<CadastroUsuario />} /> {/* Alterei para usar CadastroUsuario */}
      <Route path="/Home" element={<Home />} />
    </ReactRouterRoutes>
  );
};

export default AppRoutes;
