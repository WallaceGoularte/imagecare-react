import React from 'react';
import * as S from './styles'

import filter from '../../assets/filter.png'

function AgendamentoFiltro({ title, actived }) {
  return (
    <S.Container actived={actived}>
        <img src={filter} alt='Filtro'></img>
        <span>{title}</span>
    </S.Container>
  )
}

export default AgendamentoFiltro;
