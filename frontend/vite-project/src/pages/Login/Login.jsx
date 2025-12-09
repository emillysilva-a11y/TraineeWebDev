import React from "react";
import axios from 'axios';
import { Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import LogoCPE from '../../assets/logocpe.svg';
import { Container, Header, Title, FormWrapper, CustomButton} from "./Styles";
import { useState } from 'react';

const API_BASE_URL = 'http://localhost:2000';

const Login = () =>{
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email:'',
        senha: ''
    });

    const [loading, setLoading]=useState(false);
    const [message, setMessage]=useState(null);

    const handleChange = (e) =>{
        const{ name, value} = e.target;
        setLoginData(prevData => ({
            ...prevData, [name]: value
        }));
        setMessage(null);
    };
    const handleLogin = async (e) =>{
        e.preventDefault();
        setLoading(true);
        setMessage(null);
        if (!loginData.email || !loginData.senha) {
            setMessage({ type: 'error', content: 'Email e senha são obrigatórios.' });
            setLoading(false);
            return;
        }
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, loginData);
            const { token, usuario } = response.data;
            localStorage.setItem('userToken', token);
            const userName = usuario?.nome || 'Usuário';
            setMessage({ type: 'success', content: `Login realizado com sucesso!, ${usuario.nome}.` });
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (error) {
            console.error('Erro no Login:', error);
            
            const status = error.response?.status;
            let errorMessage = 'Erro de rede.';
            if (status === 403) {
                errorMessage = 'Email ou senha inválidos.';
            }
            else if (status === 400) {
                errorMessage = error.response?.data?.message || 'Dados fornecidos estão em formato incorreto.';
            }
            setMessage({ type: 'error', content: ` ${errorMessage}` });
        } finally {
        setLoading(false);   
        }
    };
    return(
        <Container>
            <Header>
                <img src={LogoCPE} alt="CPE Logo" className="cpe-logo-img" />
            </Header>

            <Title>LOGIN</Title>

        <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FormWrapper>
                <Input size="large" placeholder="E-mail" name="email" onChange={handleChange} value={loginData.email}
                style={{ marginBottom: 20, borderRadius: 8, height: 50, color: '##00000099' }}/>
                <Input.Password size="large" placeholder="Senha" name="senha" onChange={handleChange} value={loginData.senha}
                style={{ marginBottom: 20, borderRadius: 8, height: 50, color: '##00000099' }}/>

                {message && (
            <p 
                style={{ 
                    color: 'red',
                    fontWeight: 'bold',
                    textAlign: 'center', 
                    margin: '15px 0 0',
                }}
            >
                {message.content}
            </p>
        )}
                <p className="login-link" style={{fontSize: '14px', marginTop:'0px'}}>
                    Não tem login? Faça seu <Link to="/cadastro">cadastro aqui</Link>.
                </p>
                <div style={{width: '100%', marginTop: '30px'}}>    
                    <CustomButton size="large" type="primary" htmlType="submit" block>
                        Entrar
                    </CustomButton>
                </div>
            </FormWrapper>
        </form>
        </Container>
    )
};

export default Login;