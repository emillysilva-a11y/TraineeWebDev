import React from 'react';
import { Container, Header, ProfileContent, ProfileCard } from './Style'; 
import LogoCPE from '../../assets/logocpe.svg';

const Profile = () => {
    const userData = {
        name: "Usuário 1",
        role: "Dev Lider",
        email: "usuario1@gmail.com",
    };
return (
        <Container>
            <Header>
                <img src={LogoCPE} alt="CPE Logo" className="cpe-logo-img" />
                
                <nav className="header-nav">
                    <a href="/" className="nav-link">HOME</a>
                    <a href="/perfil" className="nav-link active">PERFIL</a> 
                    <a href="/usuarios" className="nav-link">USUÁRIOS</a>
                </nav>
            </Header>

            <ProfileContent>
                <h2>Meu Perfil</h2>
                
                <ProfileCard>
                    <p><strong>Nome:</strong> {userData.name}</p>
                    <p><strong>Cargo:</strong> {userData.role}</p>
                    <p><strong>E-mail:</strong> {userData.email}</p>
                    <button className="edit-button">Editar</button>
                </ProfileCard>
            </ProfileContent>
        </Container>
    );
};

export default Profile;