import React, { useMemo } from 'react';
import { format } from 'date-fns';
import * as S from './styles'

import iconDefault from "../../assets/exame.png";

function AgendamentoCard({ id, nome, data}) {
  const date = useMemo(() => format(new Date(data), 'dd/MM/yyyy'));
  const hour = useMemo(() => format(new Date(data), 'HH:mm'));

  return (
    <S.Container>
        <S.TopCard>
          <img src={iconDefault} alt="Icone da Tarefa" />
          <h3>{nome}</h3>
        </S.TopCard>

        <S.BottomCard>
          <strong>{date}</strong>
          <span>{hour}</span>
        </S.BottomCard>
        
    </S.Container>
  )
}

export default AgendamentoCard;
