import React from 'react';
import * as S from './styles'
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'
import Footer from '../../components/Footer';

function Autenticar() {
    return (
        <S.Container>
          <img src={logo} alt="Logo" />

            <S.Form>

            <S.Input>
              <span>Login</span>
              <input type='text' placeholder='Digite o login...'></input>
            </S.Input>

            <S.Input>
              <span>Senha</span>
              <input type='password' placeholder='Digite o login...'></input>
            </S.Input>

            <S.HomeButtonsContainer>
              <S.HomeButton>
                <Link to="/">
                    <button type="button">Login</button>
                </Link>
              </S.HomeButton>
            </S.HomeButtonsContainer>

            </S.Form>

          <Footer/>
        </S.Container>
    
      )
    }
    
export default Autenticar;
    