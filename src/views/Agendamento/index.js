import React, { useState, useEffect } from "react";
import * as S from "./styles";

import api from "../../services/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Agendamento() {
  return (
    <S.Container>
      <Header />
      <S.Title>
        <h3>Agendar Exames</h3>
      </S.Title>

      <S.Form>
          <S.Input>
              <span>Exame</span>
          </S.Input>
          <S.Select>
            <option value="">Selecionar um Exame</option>
          </S.Select>

          <S.Input>
              <span>Médico</span>
          </S.Input>
          <S.Select>
            <option value="">Selecionar Médico (a)</option>
          </S.Select>

          <S.Input>
              <span>Data</span>
              <input type="date" placeholder="Data"></input>
          </S.Input>
          
          <S.Spacer />

          <S.Input>
              <span>Hora</span>
          </S.Input>
          <S.Select>
              <option value="">Selecionar Hora</option>
          </S.Select>



          <S.Save>
            <button type="button">SALVAR</button>
          </S.Save>

      </S.Form>

      <Footer />
    </S.Container>
  );
}

export default Agendamento;
