import React, { useState } from 'react';
import * as S from './styles'
import { Link, useNavigate } from 'react-router-dom';

import api from "../../services/api";

import logo from '../../assets/logo.png'
import Footer from '../../components/Footer';

function Autenticar() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  async function handleLogin() {
      if(!login || !senha) {
        return alert("Login e senha obrigatório.")
      }

      const response = await api.post(`/login`, {
        login,
        senha
    })

    if (response.data === true) {
      navigate('/home');

    } else {
      alert('Login ou senha inválido!')
    }

  }

    return (
        <S.Container>
          <img src={logo} alt="Logo" />

            <S.Form>

            <S.Input>
              <span>Login</span>
              <input type='text' value={login} 
                      onChange={(e) => setLogin(e.target.value)}
                      placeholder='Digite o login...' />
            </S.Input>

            <S.Input>
              <span>Senha</span>
              <input type='password' value={senha}
                      onChange={(e) => setSenha(e.target.value)} 
                      placeholder='Digite o login...' />
            </S.Input>

            <S.HomeButtonsContainer>
              <S.HomeButton>
                    <button type="button" onClick={handleLogin}>Login</button>
              </S.HomeButton>
            </S.HomeButtonsContainer>

            </S.Form>

          <Footer/>
        </S.Container>
    
      )
    }
    
export default Autenticar;
    