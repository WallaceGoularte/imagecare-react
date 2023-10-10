import React from 'react';
import * as S from './styles'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AgendamentoFiltro from '../../components/AgendamentoFiltro';


function AgendamentoRealizado() {
  return (
    <S.Container>
      <Header/>

      <AgendamentoFiltro/> 
      
      <Footer/>
    </S.Container>

  )
}

export default AgendamentoRealizado;
