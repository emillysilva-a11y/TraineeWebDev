import React from 'react';
import axios from 'axios';
import LogoCPE from '../../assets/logocpe.svg';
import { Input, Button } from 'antd';
import { Container, Header, Title, FormWrapper } from './Styles'; 
import { registerUser } from '../../../src/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const API_BASE_URL = 'http://localhost:2000';

const Cadastro = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setMessage(null); 
    };

    const handleSubmit = async (e) => {
        if (e && e.preventDefault) {
        e.preventDefault();
    }
    setLoading(true);
    setMessage(null);
    if (formData.password !== formData.confirmPassword) {
            setMessage({ type: 'error', content: 'As senhas não coincidem.' });
            setLoading(false);
            return;
        }
    const dataToSend = {
            nome: formData.name,
            email: formData.email,
            cargo: formData.role,
            senha: formData.password,
    };
    try {
        const response = await axios.post(`${API_BASE_URL}/api/cadastro`, dataToSend);
        setMessage({ type: 'success', content: ' Cadastro realizado com sucesso! Redirecionando para o login...' });
        setTimeout(() => {
                navigate('/login'); 
            }, 2000);
    } catch (error) {console.error('Erro no registro:', error);
            const errorMessage = error.response?.data?.message || 'Erro de rede ou servidor. Tente novamente.';
            setMessage({ type: 'error', content: ` ${errorMessage}` });
        } finally {
            setLoading(false);
        }
    };
    return (
        <Container>
            <Header>
                <img src={LogoCPE} alt="CPE Logo" className="cpe-logo-img" />
            </Header>

            <Title>CADASTRO</Title>
            
            <FormWrapper>
                <Input size="large" placeholder="Nome" name='name' value={formData.name} onChange={handleChange}
                style={{ marginBottom: 20, borderRadius: 8, height: 50, color: '##00000099' }} />
                <Input size="large" placeholder="E-mail" name="email" value={formData.email} onChange={handleChange} 
                style={{ marginBottom: 20, borderRadius: 8, height: 50, color: '##00000099' }} />
                <Input size="large" placeholder="Cargo" name="role" value={formData.role} onChange={handleChange} 
                style={{ marginBottom: 20, borderRadius: 8, height: 50, color: '##00000099' }} />
                <Input.Password size="large" placeholder="Senha" name="password" value={formData.password} onChange={handleChange}
                style={{ marginBottom: 20, borderRadius: 8, height: 50, color: '##00000099' }} />
                <Input.Password size="large" placeholder="Repita sua senha" name="confirmPassword" value={formData.confirmPassword}onChange={handleChange}
                style={{ marginBottom: 20, borderRadius: 8, height: 50, color: '##00000099' }} />

                {message && (
                    <p style={{ color: message.type === 'error' ? 'red' : 'green', textAlign: 'center', marginBottom: 15 }}>
                        {message.content}
                    </p>
                )}
                
                <p className="login-link">
                    Já tem uma conta? Faça o login <a href="/login  ">aqui</a>.
                </p>

                <div className="criar-conta-btn-margin">
                    <Button 
                        size="large" 
                        type="primary" 
                        onClick={handleSubmit}
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