import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import LogoCPE from '../../assets/logocpe.svg';
import { Container, Header, Title, CustomInput, ProjetosContentWrapper, SearchBarContainer, ProjetosList } from './Styles';

const projetosData =[
    { _id: 1, name: "Projeto 1", description: "Descrição curta sobre o projeto" },
    { _id: 2, name: "Projeto 2", description: "Descrição curta sobre o projeto 2" },
    { _id: 3, name: "Projeto 3", description: "Descrição curta sobre o projeto 3" },
    { _id: 4, name: "Projeto 4", description: "Descrição curta sobre o projeto 4" },
];
const Projetos = () =>{
    return(
        <Container>
            <Header className="projects-header">
                <img src={LogoCPE} alt="CPE Logo" className="cpe-logo-img" />
                <div className="circular-icon-wrapper">
                    <FontAwesomeIcon icon={faSearch} className="circular-icon" /> 
                    </div>
            </Header>
            <ProjetosContentWrapper> 
                <Title className="projects-title">GERENCIAR PROJETOS</Title>
                <SearchBarContainer>
                <div className="search-input-wrapper">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <CustomInput placeholder="Buscar Projeto" className="search-input-field"/>
                </div>
            
                <button className="add-button">
                    <FontAwesomeIcon icon={faPlus} className="add-icon" />
                </button>
                </SearchBarContainer>
                <ProjetosList> 
                    {projetosData.map(projeto => (
                        <div key={projeto._id} className="projeto-item">
                            <span className="projeto-name">{projeto.name}</span>
                            <div className="projeto-actions">
                                <FontAwesomeIcon icon={faEdit} className="action-icon edit-icon" />
                                <FontAwesomeIcon icon={faTrash} className="action-icon delete-icon" />
                            </div>
                        </div>
                    ))}
                    <div className="lamp-icon-overlay">
                    </div>
                </ProjetosList>
            </ProjetosContentWrapper>
        </Container>
    );
};


export default Projetos;
