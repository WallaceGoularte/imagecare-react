import React from 'react';
import * as S from './styles'
import { Link } from 'react-router-dom';

import logo from '../../assets/top.png'
import notify from '../../assets/sino.png'

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
       
      <S.RightSide>
      <Link to="/">INÍCIO</Link>
        <span className='dividir' />
        
      <Link to="/agendarexame">Agendar Exames</Link>
        <span className='dividir' />

      <Link to="/agendamentorealizado">Agendamentos Realizados</Link>
        <span className='dividir' />

      <Link to="/">Sair</Link>
        <span className='dividir' />

        <a href='#' id='notification'>
          <img src={notify} alt='Notificação' />
          <span>7</span>
        </a>
      </S.RightSide>

    </S.Container>
  )
}

export default Header;
