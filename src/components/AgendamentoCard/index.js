import React from 'react';
import * as S from './styles'

import iconDefault from "../../assets/exame.png";

function AgendamentoCard() {
  return (
    <S.Container>
        <S.TopCard>
          <img src={iconDefault} alt="Icone da Tarefa" />
          <h3>Titulo Exame</h3>
        </S.TopCard>

        <S.BottomCard>
          <strong>31/03/2024</strong>
          <span>2:22</span>
        </S.BottomCard>
        
    </S.Container>
  )
}

export default AgendamentoCard;
