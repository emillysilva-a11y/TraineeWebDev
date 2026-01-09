import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Container, Header, UsersHeader, UsersContent, SearchBar, TableWrapper } from './Styles'; 
import LogoCPE from '../../assets/logocpe.svg'; 

const API_URL = 'http://localhost:2000/usuarios'

const Users = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchUsers = async () =>{
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(API_URL, {
            headers: {Authorization: `Bearer ${token}`}
        });
            setUsers(response.data);
        } catch (error) {
            console.error("Erro ao carregar usuários", error)
        }
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        if(window.confirm("Tem certeza que deseja exluir esse usuário?")){
            try {
                const token = localStorage.getItem('token');
                await axios.delete(`${API_URL}/${id}`,{
                headers: { Authorization: `Bearer ${token}`}});
                setUsers(users.filter(user => user._id !== id));  
                alert("Usuário excluído com sucesso!");  
            } catch (error) {
                alert("Erro ao excluir Usuário.");
            }
        }
    };
 
    const handleAccessChange = (id, newAccess) => {
        setUsers(users.map(user => 
            user.id === id ? { ...user, access: newAccess } : user
        ));
    };

   const filteredUsers = users.filter(user => {
        const nome = user.nome ? user.nome.toLowerCase() : "";
        const cargo = user.cargo ? user.cargo.toLowerCase() : "";
        const busca = searchTerm.toLowerCase();
        return nome.includes(busca) || cargo.includes(busca);
    });
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
                        <span>Usuário</span> 
                        <span></span>
                    </div>

                    {filteredUsers.map(user => (
                        <div key={user._id} className="table-row">
                            <span>{user.nome}</span>
                            <span>{user.cargo}</span>
                            
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
                                <FontAwesomeIcon icon={faTrash} className="delete-icon" title="Excluir" 
                                onClick={() => handleDelete(user._id)}
                                style={{ cursor: 'pointer' }}/>
                            </div>
                        </div>
                    ))}
                </TableWrapper>
            </UsersContent>
        </Container>
    );
};

export default Users;