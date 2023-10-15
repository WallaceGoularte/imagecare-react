import React, { useState, useEffect } from 'react';
import * as S from './styles'

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AgendamentoFiltro from '../../components/AgendamentoFiltro';
import AgendamentoCard from '../../components/AgendamentoCard';

function AgendamentoRealizado() {
  const [filterActived, setFilterActived] = useState('today');
  const [agendamentos, setAgendamentos] = useState([]);

  async function carregarAgendamentos() {
    await api.get(`/agendamento?filtro=${filterActived}`).then(response => {
        setAgendamentos(response.data)
    })
  }

  useEffect(() => {
    carregarAgendamentos();
  }, [filterActived])

  return (
    <S.Container>
      <Header/>

        <S.FilterArea>
          <button type="button" onClick={() => setFilterActived("all")}>
            <AgendamentoFiltro title="Todos"  actived={filterActived === 'all'} />
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
        {
          agendamentos.map(a => (
            <AgendamentoCard id={a.id} nome={a.exameId.nome} data={a.data} />
          ))
        }
        </S.Conteudo>

      <Footer/>

    </S.Container>

  )
}

export default AgendamentoRealizado;
