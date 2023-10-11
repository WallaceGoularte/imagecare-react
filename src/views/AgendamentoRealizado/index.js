import React, { useState } from 'react';
import * as S from './styles'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AgendamentoFiltro from '../../components/AgendamentoFiltro';
import AgendamentoCard from '../../components/AgendamentoCard';

function AgendamentoRealizado() {
  const [filterActived, setFilterActived] = useState('today');
  return (
    <S.Container>
      <Header/>
        <S.FilterArea>
          <button type="button" onClick={() => setFilterActived("all")}>
            <AgendamentoFiltro title="Todos"  actived={filterActived === 'all'} onClick={() => setFilterActived("all")} />
          </button>

          <button type="button"  onClick={() => setFilterActived("today")} >
            <AgendamentoFiltro title="Hoje"   actived={filterActived === 'today'} />
          </button>

          <button type="button" onClick={() => setFilterActived("week")} >
            <AgendamentoFiltro title="Semana" actived={filterActived === 'week'} />
          </button>

          <button type="button" onClick={() => setFilterActived("month")} >
            <AgendamentoFiltro title="Mês"    actived={filterActived === 'month'} />
          </button>

          <button type="button" onClick={() => setFilterActived("year")} >
            <AgendamentoFiltro title="Ano"    actived={filterActived === 'year'} />
          </button>
        </S.FilterArea>
      
        <S.Title>
          <h3>Exames Agendados</h3>
        </S.Title>

        <S.Conteudo>
          <AgendamentoCard />
          <AgendamentoCard />
          <AgendamentoCard />
          <AgendamentoCard />
          <AgendamentoCard />
          <AgendamentoCard />
          <AgendamentoCard />
          <AgendamentoCard />

        </S.Conteudo>

      <Footer/>
    </S.Container>

  )
}

export default AgendamentoRealizado;
