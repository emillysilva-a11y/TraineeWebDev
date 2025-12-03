import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './pages/Projetos/Styles';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'; 
import ProjetosPage from './pages/Projetos/Projetos';
import EditarUsuario from './pages/EditarUsuario/EditarUsuario';


function App() {
  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<h1>Página de Login</h1>} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} /> 
      <Route path="/home" element={<Home/>}/>
      <Route path="/editarusuario" element={<EditarUsuario/>} />
      <Route path="/projetos" element={<ProjetosPage />} />
      <Route path="*" element={<h2>404 | Página não encontrada</h2>} />
    </Routes>
    </>
  );
}

export default App;