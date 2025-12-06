import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './pages/Projetos/Styles';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'; 
import ProjetosPage from './pages/Projetos/Projetos';
import Usuarios from './pages/Usuarios/Usuario';
import Perfil from './pages/Perfil/Perfil';


function App() {
  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} /> 
      <Route path="/usuarios" element={<Usuarios/>} />
      <Route path="/projetos" element={<ProjetosPage />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="*" element={<h2>404 | Página não encontrada</h2>} />
    </Routes>
    </>
  );
}

export default App;