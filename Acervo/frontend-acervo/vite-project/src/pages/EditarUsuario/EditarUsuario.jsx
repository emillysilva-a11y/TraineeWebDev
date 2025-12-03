import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LogoCPE from '../../assets/logocpe.svg';
import { Container, Header, Title, CustomInput, CustomButton, FormWrapper } from './Styles';

const EditarUsuario = () => {
    return (
        <Container>
            <Header>
                <img src={LogoCPE} alt="CPE Logo" className="cpe-logo-img" />
                <div className="circular-icon-wrapper">
                    <FontAwesomeIcon icon={faSearch} className="circular-icon" />
                </div>
            </Header>
            <Title className="edit-title">Editar usuário</Title>  
            <FormWrapper className="edit-user-form">
                <div className="input-group">
                    <label className="input-label">Nome:</label>
                    <CustomInput placeholder="Nome do Usuário" />
                </div>
                <div className="input-group">
                    <label className="input-label">Cargo:</label>
                    <CustomInput placeholder="Cargo do Usuário" />
                </div>
                <div className="button-group">
                    <CustomButton className="cancel-button">CANCELAR</CustomButton>
                    <CustomButton className="save-button">SALVAR</CustomButton>
                </div>
            </FormWrapper>  

        </Container>
    );
};

export default EditarUsuario;