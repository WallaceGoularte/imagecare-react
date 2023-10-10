import React from 'react';
import * as S from './styles'
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
  return (
    <S.Container>
      <Header/>

      <S.HomeButtonsContainer>
        <S.HomeButton>
            <Link to="/agendarexame">
                <button type="button">AGENDAR EXAME</button>
            </Link>
        </S.HomeButton>

        <S.HomeButton>
            <Link to="/agendamentorealizado">
                <button type="button">VISUALIZAR AGENDAMENTOS</button>
            </Link>
        </S.HomeButton>
      </S.HomeButtonsContainer>
      <Footer/>
    </S.Container>

  )
}

export default Home;
