import React from 'react';
import LogoCPE from '../../assets/logocpe.svg';
import { Input, Button } from 'antd';
import { Container, Header, Title, FormWrapper } from './Styles'; 
import { registerUser } from '../../../src/api';

const Cadastro = () => {
    return (
        <Container>
            <Header>
                <img src={LogoCPE} alt="CPE Logo" className="cpe-logo-img" />
            </Header>

            <Title>CADASTRO</Title>
            
            <FormWrapper>
                <Input size="large" placeholder="Nome" style={{ marginBottom: 20, borderRadius: 8, height: 50, color: '##00000099' }} />
                <Input size="large" placeholder="E-mail" style={{ marginBottom: 20, borderRadius: 8, height: 50, color: '##00000099' }} />
                <Input size="large" placeholder="Cargo" style={{ marginBottom: 20, borderRadius: 8, height: 50, color: '##00000099' }} />
                <Input.Password 
                    size="large" 
                    placeholder="Senha" 
                    style={{ marginBottom: 20, borderRadius: 8, height: 50, color: '##00000099' }} 
                />
                <Input.Password 
                    size="large" 
                    placeholder="Repita sua senha" 
                    style={{ marginBottom: 20, borderRadius: 8, height: 50, color: '##00000099' }} 
                />
                
                <p className="login-link">
                    Já tem uma conta? Faça o login <a href="/login">aqui</a>.
                </p>

                <div className="criar-conta-btn-margin">
                    <Button 
                        size="large" 
                        type="primary" 
                        htmlType="submit"
                        style={{ 
                            backgroundColor: '#ffe712', 
                            color: 'black', 
                            fontWeight: 'bold',
                            border: 'none',
                            height: 50,
                            borderRadius: 8
                        }}
                        block
                    >
                        CRIAR CONTA
                    </Button>
                </div>

            </FormWrapper>
        </Container>
    );
};

export default Cadastro;