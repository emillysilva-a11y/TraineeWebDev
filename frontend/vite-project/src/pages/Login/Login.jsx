import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import LogoCPE from '../../assets/logocpe.svg';
import { Container, Header, Title, FormWrapper, CustomInput, CustomPassword, CustomButton} from "./Styles";
import { useState } from 'react';
import Password from "antd/es/input/Password";

const Login = () =>{
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email:'',
        password: ''
    });

    const handleChange = (e) =>{
        const{ placeholder, value} = e.target;
        const key = placeholder.toLowerCase()=== 'email' ? 'email' : 'password';
        setLoginData(prevData => ({
            ...prevData,
            [key]: value
        }));
    };
    const handleLogin = (e) =>{
        e.preventDefault();
        console.log("Tentativa de login...", loginData);

        navigate('/home');
    };
    return(
        <Container>
            <Header>
                <img src={LogoCPE} alt="CPE Logo" className="cpe-logo-img" />
            </Header>

            <Title>LOGIN</Title>

        <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FormWrapper>
                <CustomInput size="large" placeholder="E-mail" onChange={handleChange} value={loginData.email}/>
                <CustomInput size="large" placeholder="Senha" onChange={handleChange} value={loginData.password}/>
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