import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Container, Header, UsersHeader, UsersContent, SearchBar, TableWrapper } from './Styles'; 
import LogoCPE from '../../assets/logocpe.svg'; 

const initialUsersData = [
    { id: 1, name: "Usuário 1", role: "Dev Lider", access: "Administrador" },
    { id: 2, name: "Usuário 2", role: "Presidente", access: "Comum" },
    { id: 3, name: "Usuário 3", role: "Consultor de tecnologia", access: "Comum" },
];

const Users = () => {
    const [users, setUsers] = useState(initialUsersData);
    const [searchTerm, setSearchTerm] = useState('');

    const handleAccessChange = (id, newAccess) => {
        setUsers(users.map(user => 
            user.id === id ? { ...user, access: newAccess } : user
        ));
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <Header>
                <img src={LogoCPE} alt="CPE Logo" className="cpe-logo-img" />
                
                <nav className="header-nav">
                    <a href="/" className="nav-link">HOME</a>
                    <a href="/perfil" className="nav-link">PERFIL</a>
                    <a href="/usuarios" className="nav-link active">USUÁRIOS</a> 
                </nav>
            </Header>
            
            <UsersHeader>
                <h2>GERENCIAR USUÁRIOS</h2>
            </UsersHeader>
            
            <UsersContent>
                {/* Campo de Pesquisa */}
                <SearchBar>
                    <FontAwesomeIcon icon={faSearch} />
                    <input 
                        type="text" 
                        placeholder="Pesquisar usuários" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </SearchBar>

                <TableWrapper>
                    <div className="table-header">
                        <span>Nome</span>
                        <span>Cargo</span>
                        <span>Usuário</span> {/* Nível de Acesso */}
                        <span></span>
                    </div>

                    {filteredUsers.map(user => (
                        <div key={user.id} className="table-row">
                            <span>{user.name}</span>
                            <span>{user.role}</span>
                            
                            <div className="access-select-wrapper">
                                <select
                                    value={user.access}
                                    onChange={(e) => handleAccessChange(user.id, e.target.value)}
                                >
                                    <option value="Administrador">Administrador</option>
                                    <option value="Comum">Comum</option>
                                </select>
                            </div>

                            <div className="actions">
                                <FontAwesomeIcon icon={faTrash} className="delete-icon" title="Excluir" />
                            </div>
                        </div>
                    ))}
                </TableWrapper>
            </UsersContent>
        </Container>
    );
};

export default Users;