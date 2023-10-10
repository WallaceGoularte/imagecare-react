import React from 'react';
import * as S from './styles'

import logo from '../../assets/top.png'
import notify from '../../assets/sino.png'

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <a href='#'>Início</a>
        <span className='dividir' />
        <a href='#'>Agendamento</a>
        <span className='dividir' />

        <a href='#'>Resultados</a>
        <span className='dividir' />

        <a href='#'>Sair</a>
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
